# Compact expert cards

Approved behavior: keep photos, names and roles visible. Limit descriptions to four lines initially. Each overflowing description has its own “Показать полностью” button, changing to “Свернуть” when expanded. Short descriptions need no button. Adjacent cards retain their own height. Apply to both home page variants, with keyboard accessible buttons and aria-expanded state. Preserve all text and existing slider navigation.

Implementation: wrap descriptions during slider initialization, add shared collapse styles to both stylesheets, and measure overflow after fonts load and on resize. Size the slider viewport to its visible cards. Verify JavaScript syntax and browser behavior if a browser runtime is available.
