# Specification

## Summary
**Goal:** Add custom domain support guidance and canonical URL metadata for the deployed Internet Computer website.

**Planned changes:**
- Add a “Custom domain setup” guide (README or docs page) describing prerequisites, required DNS records at the registrar, and the Internet Computer configuration steps to serve the site on the custom domain.
- Include a checklist of required user-provided values (desired domain name, current deployed canister URL/identifier), where to apply them, and a troubleshooting/verification section for DNS/SSL propagation issues.
- Update `frontend/index.html` to include a configurable canonical link element that is safe for local development and can be set for the production custom domain.
- Ensure internal navigation works under both the default deployment URL and the custom domain (avoid hard-coded absolute URLs that would break under a new domain).

**User-visible outcome:** The repository contains clear instructions to connect a custom domain to the deployed site, and the site can publish a configurable canonical URL suitable for the final custom domain without breaking local/dev or default URLs.
