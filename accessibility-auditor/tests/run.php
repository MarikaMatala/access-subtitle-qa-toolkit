<?php

declare(strict_types=1);

require_once __DIR__ . '/../src/AuditFinding.php';
require_once __DIR__ . '/../src/HtmlAuditor.php';

use AccessAudit\HtmlAuditor;

$auditor = new HtmlAuditor();

$badHtml = '<html><head></head><body><img src="poster.jpg"><h1>Title</h1><h3>Skipped level</h3><input id="email"><a href="/next"></a></body></html>';
$findings = $auditor->audit($badHtml);
$codes = array_map(static fn ($finding): string => $finding->code, $findings);

$expected = [
    'page-title-missing',
    'document-language-missing',
    'image-alt-missing',
    'heading-level-skipped',
    'form-control-label-missing',
    'interactive-name-missing',
];

foreach ($expected as $code) {
    if (!in_array($code, $codes, true)) {
        fwrite(STDERR, "FAIL: expected finding not found: {$code}\n");
        exit(1);
    }
}

$goodHtml = '<!doctype html><html lang="fi"><head><title>Esimerkkisivu</title></head><body><img src="decorative.svg" alt=""><h1>Otsikko</h1><label for="email">Sähköposti</label><input id="email"><a href="/next">Jatka</a></body></html>';
$goodFindings = $auditor->audit($goodHtml);

if ($goodFindings !== []) {
    fwrite(STDERR, "FAIL: expected no findings for the basic valid fixture.\n");
    foreach ($goodFindings as $finding) {
        fwrite(STDERR, $finding->code . "\n");
    }
    exit(1);
}

echo "All basic Accessibility Auditor tests passed.\n";