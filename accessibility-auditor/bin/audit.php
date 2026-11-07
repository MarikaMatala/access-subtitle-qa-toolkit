<?php

declare(strict_types=1);

require_once __DIR__ . '/../src/AuditFinding.php';
require_once __DIR__ . '/../src/HtmlAuditor.php';

use AccessAudit\HtmlAuditor;

if ($argc !== 2) {
    fwrite(STDERR, "Usage: php bin/audit.php <html-file>\n");
    exit(2);
}

$file = $argv[1];
if (!is_file($file) || !is_readable($file)) {
    fwrite(STDERR, "Error: file does not exist or cannot be read.\n");
    exit(2);
}

$html = file_get_contents($file);
if ($html === false) {
    fwrite(STDERR, "Error: could not read the HTML file.\n");
    exit(2);
}

$findings = (new HtmlAuditor())->audit($html);
$results = array_map(
    static fn ($finding): array => $finding->toArray(),
    $findings
);

$output = json_encode(
    [
        'file' => basename($file),
        'finding_count' => count($results),
        'findings' => $results,
        'limitations' => [
            'This is an early automated check, not a complete WCAG conformance assessment.',
            'Some accessibility requirements need manual testing with assistive technology and human review.',
        ],
    ],
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
);

if ($output === false) {
    fwrite(STDERR, "Error: could not encode the audit report.\n");
    exit(1);
}

echo $output . PHP_EOL;
exit(0);