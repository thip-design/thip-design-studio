# Update Hero Section with Video

## Goal Description
The objective is to overhaul the Hero section of the Thip Design Studio website to use a modern, premium `.mp4` background video instead of the static image. The new design needs to maintain a centered, clean, and elegant layout, updating the main copy and adding a specific LINE chat button. Additionally, since high-quality 3D mockups require specific assets not currently present, a minimal white background with subtle CSS motion will serve as the immediate fallback while the final 3D MP4 is added locally.

## Proposed Changes

### Index HTML
#### [MODIFY] [index.html](file:///c:/thip-design-studio/index.html)
- Replace `.hero` background image CSS with properties that support absolute positioning for an underlying video.
- Add `<video>` element with `autoplay`, `muted`, `loop`, and `playsinline` attributes.
- Update `<h1>` and `<p>` text to match the new requested copy.
- Modify the Hero buttons to include `"Start Your Project"` and `"Chat via LINE"`.
- Implement a dark overlay `background: rgba(0, 0, 0, 0.4)` over the video to maintain text readability.
- Add a subtle background animation fallback to `.hero` using a slow moving gradient to fit the "minimal white background with subtle motion" fallback requirement.

## Verification Plan
### Automated Tests
- Validate standard HTML and CSS loading without console errors.

### Manual Verification
- Review the [index.html](file:///c:/thip-design-studio/index.html) locally in a browser to confirm:
  - Video tag is structured properly.
  - Text is exactly centered with appropriate dark overlay for contrast.
  - LINE button opens the provided link.
  - The fallback subtle motion background provides the required elegant aesthetic.
