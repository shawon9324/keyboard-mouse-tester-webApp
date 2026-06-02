# Changelog

All notable changes to this project are documented here.
This project adheres to [Semantic Versioning](https://semver.org/).

## [2.0.0] — 2026-06-02

> The "thank you" release — a complete, ground-up rebuild dedicated to everyone who starred and
> forked the project over the last six years. 💜

### Added
- 🖱️ **Mouse tester** — left / middle / right + back (4) / forward (5) buttons, scroll up/down,
  live cursor position, movement deltas, and double-click detection.
- 🎮 **Gamepad tester** — buttons, triggers and analog sticks via the Gamepad API, with live values
  and connect/disconnect handling.
- 📊 **Live stats** — total presses, unique keys, most-pressed key, and a keyboard-coverage meter.
- 💡 **Dead-key detection** — tested keys stay marked so unresponsive keys are obvious.
- 🔊 **Sound** (Web Audio click) and **📳 haptics** (vibration on mobile), both toggleable and remembered.
- 📱 **Mobile / touch support** — tap on-screen keys; the layout scales fluidly to any screen.
- ⚡ **PWA** — installable, with a service worker for full **offline** use.
- 🧡 **Hall of Thanks** — an in-app credits dialog listing every stargazer and forker.
- Project hygiene: `LICENSE` (MIT), `CHANGELOG.md`, `.gitignore`, `.gitattributes`, and a vector `favicon.svg`.

### Changed
- **Renamed** from *Keyboard & Mouse Tester* to **Keyboard, Mouse & Gamepad Tester** to reflect the
  new gamepad support.
- **Full visual redesign** — modern dark theme with an accent gradient, glassy surfaces, animated
  keycaps, and a tabbed Keyboard / Mouse / Gamepad layout.
- **Rewritten in modern vanilla JS** — replaced jQuery with clean, dependency-free ES code.
- Keyboard now uses **`KeyboardEvent.code`** instead of the deprecated `keyCode`, so left/right
  modifiers and the numpad are distinguished without special-casing.
- Keyboard layout is now **data-driven** (`js/keymaps.js`), replacing ~300 lines of hand-written HTML.

### Removed
- **jQuery**, **SweetAlert2**, **Font Awesome** and the bundled font — no more runtime dependencies.
- **AddThis** share widget (service shut down in 2023) and the **WebFreeCounter** hit counter.
- Deprecated `<marquee>` and inline styling.

### Fixed
- Normalized line endings via `.gitattributes` to stop whole-file CRLF/LF "phantom diffs".

## [1.0.0] — 2020

- Initial release: keyboard tester with full key highlighting, key-name display, duplicate-key
  differentiation (Shift/Alt/Ctrl/Enter), and basic mouse button + scroll tests.

[2.0.0]: https://github.com/shawon9324/keyboard-mouse-tester-webApp/releases/tag/v2.0.0
