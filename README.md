# findex-site

Public site for FinDex (joinfindex.com). Single static HTML file (styles inline), deployed by GitHub Pages from `main`.

## Current state

Pre-launch landing page. The Request Access and Sign In buttons are not yet connected to a form or portal.

## Files

- `index.html`: landing page
- `privacy.html`: privacy policy (draft, marked as such on the page; `noindex`)
- `_drafts/privacy-policy-draft.html`: full draft of the Privacy & Security page (Privacy Policy and Terms of Use), for legal review; not published. To publish, copy it over `privacy/index.html` once counsel signs off.
- `_drafts/privacy-policy.md`: earlier privacy-only draft (superseded by the HTML draft)
- `fonts/`: self-hosted Inter font
- `favicon.svg`, `favicon.ico`, `favicon-32.png`, `favicon-96.png`: browser-tab icon (gradient with white F). Bump the `?v=` in the `<head>` links when changing them so browsers refetch.
- `apple-touch-icon.png`, `icon-192.png`: home-screen / app icons (gradient with white FinDex wordmark)
- `og-image.png`: 1200x630 link-preview image used by iMessage, Google, Slack, LinkedIn, X, etc. (Open Graph / Twitter tags in each page's `<head>`)
- `logos/`: brand logos used in the Family of Brands footer (white versions)

## Family of Brands

Logos live in `logos/` and appear in the Family of Brands footer in `index.html`. Order stays Aquamark, Secure Broker, Secure Funder, FinDex.

## Not yet started

The Privacy Policy and Terms of Use are drafted together in `_drafts/privacy-policy-draft.html`, pending legal review. The live `/privacy/` page is a placeholder until then.
