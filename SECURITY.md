# Security Policy

This project processes user-provided HTML and subtitle files. Treat all uploaded or pasted content as untrusted input.

## Reporting a vulnerability
Do not publish details of an exploitable vulnerability in a public issue. Use GitHub's private vulnerability reporting feature for this repository if enabled. Otherwise, contact the maintainer privately through the contact information on the maintainer's GitHub profile.

Include a description, reproduction steps, affected component/version, and potential impact.

## Current limitations
This project is in early development and is not intended for production use. Do not upload confidential, personal, or sensitive files.

Planned safeguards include upload size limits, strict input validation, safe output escaping, parameterized SQL queries, and protection against server-side request forgery before remote URL scanning is implemented.