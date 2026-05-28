# AGENTS.md — Die Stasie Hartenbos

Restaurant landing page for Die Stasie, a railway-themed restaurant and bar in Hartenbos, South Africa.

## Architecture

Single-route TanStack Start app. All page content lives in `src/routes/index.tsx`. The root shell (`src/routes/__root.tsx`) handles metadata and Google Fonts injection.

## Key Directories

```
src/
  routes/
    __root.tsx     — HTML shell, head metadata, fonts
    index.tsx      — Full landing page component (all sections)
  styles.css       — All styles: CSS variables, section-level classes
public/
  assets/
    logo.png       — Die Stasie locomotive logo (PNG)
    bar-interior.jpg
    bar-full.jpg
    bar-taps.jpg
    exterior.jpg
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 + custom CSS |
| Fonts | Bebas Neue, Playfair Display, Lato (Google Fonts) |
| Deployment | Netlify |

## Design System

CSS custom properties defined at `:root` in `styles.css`:
- `--green` / `--green-dark` — brand forest greens (from logo background)
- `--terracotta` — accent rust/orange (from wall colour in photos)
- `--gold` / `--gold-light` — accent gold for highlights and prices
- `--cream` / `--cream-dark` — light background tones
- `--dark` — near-black for dark sections

## Coding Conventions

- CSS class names follow BEM-lite block__element pattern (`nav-logo`, `special-card`, etc.)
- No CSS Modules — global classes in `styles.css`, section-scoped by prefix
- Inline SVG icons rather than an icon library to keep bundle small
- `menuData`, `specials`, and `hours` arrays are module-level constants — update these to change content
- Menu tabs use a `MenuTab` union type (`'starters' | 'mains' | 'pizza' | 'drinks'`) for type safety

## Non-Obvious Decisions

- Hero background uses a CSS `@keyframes heroZoom` animation for a slow zoom-in — avoids JS scroll listeners
- Grain texture on hero is an inline SVG data URI on the `::after` pseudo-element of the overlay div
- Map iframe uses a generic Hartenbos area embed; owner should replace the `src` with their exact Google Maps embed URL obtained from Google Maps > Share > Embed
- Phone, email, and social links are placeholders — owner must update to real contact details
- `lang="af"` is set on `<html>` as the restaurant is Afrikaans-named in a South African context
