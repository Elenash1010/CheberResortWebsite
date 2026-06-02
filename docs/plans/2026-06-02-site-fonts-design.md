# Site Fonts Design

## Goal

Update the site typography consistently across all pages:

- Use `PT Sans` for the main body text.
- Use `Raleway` for semantic headings `h1` through `h6`.

## Approach

Load both font families from Google Fonts in the shared stylesheet. Update the
global `body` rule and add a global heading rule. Keep existing accent styles,
such as quotes and branded text, unchanged unless they are semantic headings.

## Verification

- Confirm the shared stylesheet loads both families.
- Confirm `body` uses `PT Sans`.
- Confirm `h1` through `h6` use `Raleway`.
