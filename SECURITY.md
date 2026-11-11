# Security Policy

This project processes user-provided HTML and subtitle files. Treat all supplied content as untrusted input.

## Current processing boundaries

The published browser demo processes pasted HTML and selected subtitle files locally in the browser; it does not send that content to a project backend. The PHP command-line auditor is a separate local tool. Do not expose the CLI tool as a public upload service.

The project is in early development and is not intended for production use. Do not upload confidential, personal or sensitive files to the public demo, and do not use real personal data in test fixtures.

The current browser demo does not provide remote URL scanning or a server-side upload endpoint. If either capability is added later, implement and test upload-size limits, strict input validation, safe output escaping, parameterized SQL queries and server-side request forgery protections before exposing it publicly.

## Reporting a vulnerability

Do not publish details of an exploitable vulnerability in a public issue. Use GitHub's private vulnerability reporting feature for this repository if enabled. Otherwise, contact the maintainer privately through the contact information on the maintainer's GitHub profile.

Include a description, reproduction steps, affected component/version, and potential impact. Do not attach confidential files, real credentials or personal data.
