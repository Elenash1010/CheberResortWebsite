# Header Navigation Design

## Goal

Simplify the primary header navigation and improve its readability.

## Approach

- Move the `Акции` and `Специалисты` home anchors from the primary navigation
  into the beginning of the `Еще` dropdown.
- Remove `Контакты` from the primary navigation row.
- Keep all links available in the mobile navigation.
- Increase primary navigation text to `16px`.
- Use `Raleway` for primary navigation links and the `Еще` toggle.
- Use a `700` font weight, `0.02em` letter spacing, and `0.08em` word spacing
  for the primary navigation.
- Distribute primary navigation items with `space-between` across the available
  header width and keep a `16px` minimum gap.
- Reduce the header logo to `216px` by `68px`, with a `172px` by `54px`
  mobile size.
- Render the existing blue PNG logo as white over the home hero with a CSS
  filter, then restore its original blue color after scrolling.
- Reduce the header booking CTA padding to `11px 18px` without changing other
  site buttons.
- Keep navigation links white while the header is layered over a hero image.
- Use the brand blue `#3869AC` for navigation links after scrolling and on
  light header backgrounds.

## Verification

- Confirm `Акции` and `Специалисты` no longer appear in the primary row.
- Confirm both links appear first in the `Еще` dropdown.
- Confirm the mobile menu still includes both links.
- Confirm the final CSS cascade uses white over hero imagery and brand blue on
  light backgrounds.
