# Architecture

## Decision

Keep a static HTML, CSS, and JavaScript site.

## Why

- GitHub Pages already serves the repository.
- The site has no forms, authentication, data storage, or dynamic application state.
- Static delivery keeps maintenance, cost, and failure modes low.

## Structure

- `index.html`: all public content and metadata.
- `css/style.css`: design tokens, responsive layout, accessibility, and theme rules.
- `js/main.js`: mobile navigation and small progressive enhancements.
- `assets/`: optimized local images and font files.
- Legacy HTML pages redirect to anchors on the home page.

## External services

- GitHub Pages: static hosting.
- VK and Telegram: outbound messenger links only.

No secrets are required and no client-side personal data is collected.
