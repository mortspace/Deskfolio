# DeskFolio

A pocket-sized portfolio that opens like a book. Built as a tiny desk scene with a flip-through book on a spring, draggable/swappable stickers, and hand-drawn marker underlines that draw themselves on hover.

**Live demo:** https://feralui.vercel.app/#/deskfolio

## Showcase

https://github.com/user-attachments/assets/809826f0-437d-4c35-ab77-4b2f633e8c2c

## Highlights

- **The book** opens and turns pages on a spring. Drag a corner, tap a side, or use the arrow keys.
- **Desk stickers** are draggable, resizable, and swappable via a long-press radial menu.
- **Self-drawing scribble underlines**: each project name gets a real marker scribble that a "pen" traces along its own path on hover (the centerline is derived from the filled SVG shape, then drawn via `stroke-dashoffset` inside a mask).
- **Editable text**: the journal/about copy is editable in place.

## Install

```bash
npm install deskfolio
```

Peer deps (provide these in your app): `react`, `react-dom`, `motion`.

## Usage

```tsx
import { DeskFolio } from 'deskfolio'
import 'deskfolio/styles.css'

export default function Page() {
  return <DeskFolio />
}
```

`DeskFolioPage` is also exported if you want to supply your own page wrapper.

### Assets

DeskFolio loads its stickers/backgrounds from absolute paths (`/stickers/…`, `/backgrounds/…`, `/mort-profile.webp`). Copy the shipped assets into your app's web root so they resolve:

```bash
cp -r node_modules/deskfolio/public/* public/
```

(They live under `deskfolio/public`: `stickers/`, `backgrounds/`, and the two `.webp` images.)

## Tech

- React 19 + [motion.dev](https://motion.dev)
- Vite + TypeScript
- `web-haptics` for tactile feedback
- Assets: a mix of Freepik + hand-built SVGs

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
