# Inner Pages Unification Design

Goal: bring every internal page into the visual language of the homepage without changing `index.html`.

## Constraints

- Homepage remains untouched in markup, behavior, and scoped home styles.
- Internal pages should feel like secondary landings within the same premium brand system.
- Existing content should stay readable and structurally familiar, even if hero and CTA composition become more expressive.

## Strategy

1. Add an internal-page enhancement layer in `assets/js/main.js`.
2. Scope all new visual rules to `body.inner-page-shell`.
3. Rebuild each internal page hero into a premium two-column stage:
   - eyebrow
   - large serif headline
   - lead copy
   - chips
   - two CTAs
   - aside cards with trust/value points
4. Add a generated final CTA section on pages that do not already have one.
5. Restyle internal cards, bands, document panels, medical grids, contact panels, and sticky contact bar to match the homepage mood.

## Implementation Notes

- Page-specific hero messaging and CTA labels are driven by a config object keyed by HTML filename.
- Existing homepage styles continue to win through `.home-page-shell`; internal pages use `.inner-page-shell`.
- No homepage selectors or homepage markup are modified as part of this task.

## Verification

- Confirm `index.html` is unchanged.
- Confirm internal pages receive `inner-page-shell` and enhanced hero markup on load.
- Confirm pages without an existing CTA banner receive a generated final CTA section.
