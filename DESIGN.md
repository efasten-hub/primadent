# DESIGN.md — In Common With

> **Quelle:** Refero Styles, Stil „Incommonwith“
> https://styles.refero.design/style/1f9089e1-4170-482f-b988-afe1124a70a9
>
> ⚠️ **[[PRÜFEN: Original-Export einfügen]]** Die Refero-Seite war beim Aufbau aus der Build-Umgebung nicht erreichbar (Netzwerkrichtlinie). Der folgende Teil (Abschnitte 1–7) ist anhand der öffentlich zugänglichen Beschreibung des Stils **rekonstruiert**: Farben, Schriften, 24px-Headline, Mier A 13–26px, 0px-Radius, randlose Fotografie, eine Tinte für Text, Linien und Links. Sobald der originale DESIGN.md-Export vorliegt, ersetzt er die Abschnitte 1–7 wörtlich. Abschnitt 8 („Anpassungen für Arztpraxis“) bleibt bestehen.

---

## 1. Visual Theme & Atmosphere

In Common With reads like a printed design quarterly, not a storefront. Warm cream-white paper (`#fafaf9`) is the canvas. Full-bleed, golden-hour interior photography carries the visual weight. A single deep oxblood ink (`#4a0a05`) is used for every text element, every border and every link. Nothing else competes: no accent colour, no gradients, no shadows, no rounded corners. Hierarchy comes from typography, whitespace and hairline rules.

**Key characteristics**
- One surface (Cream Paper), one ink (Oxblood). Monochrome by design.
- Classical serif (Caslon Ionic) only for category names, journal headlines and the wordmark.
- Neo-grotesque sans (Mier A) for body, navigation, captions, dates, links and all functional UI.
- Photography fills its container edge to edge: 0px radius, 0px padding, no overlays.
- 1px hairlines in ink separate sections, list items and grid cells.
- Generous, editorial whitespace. Calm and slow.

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Cream Paper | `#fafaf9` | Page background, all surfaces, text on filled ink elements |
| Oxblood Ink | `#4a0a05` | All text, borders, hairlines, links, icons, filled buttons |

There are no secondary, accent, success or error colours. States are expressed through underline, inversion (ink ↔ paper) and line weight, never through colour.

```css
:root {
  --color-paper: #fafaf9; /* Cream Paper */
  --color-ink:   #4a0a05; /* Oxblood Ink */
}
```

## 3. Typography Rules

> Belegt sind nur: Caslon Ionic 24px für Kategorien, Journal-Headlines und Wortmarke; Mier A 13–26px für Body, Navigation, Captions, Datumsangaben, Links und UI. Werte mit „≈“ sind **Annahmen** der Rekonstruktion und durch den Original-Export zu ersetzen.

| Role | Family | Size | Weight | Line height | Notes |
|---|---|---|---|---|---|
| Wordmark | Caslon Ionic | 24px | ≈ 400 | ≈ 1.2 | brand name |
| Category / Journal headline | Caslon Ionic | 24px | ≈ 400 | ≈ 1.2 | the only serif use |
| Large UI / Intro | Mier A | 26px (upper end of range) | ≈ 400 | ≈ 1.3 | sparing |
| Body | Mier A | ≈ 16px | ≈ 400 | ≈ 1.5 | |
| Navigation / Links | Mier A | ≈ 14–16px | ≈ 400–500 | ≈ 1.4 | underline on hover/active |
| Caption / Date / Meta | Mier A | 13px (lower end of range) | ≈ 400 | ≈ 1.4 | |

**Principles**
- Two typefaces only. Serif for identity and headlines, sans for everything functional.
- Few sizes, no in-between sizes.
- No bold display. Hierarchy comes from scale and the serif/sans contrast.

```css
:root {
  --font-serif: "Caslon Ionic", Georgia, serif;
  --font-sans:  "Mier A", "Helvetica Neue", Arial, sans-serif;
}
```

## 4. Component Stylings

- **Links:** ink, underline (1px) on hover and for the active state. No colour change.
- **Buttons:** rectangular, 0px radius, 1px ink border. Primary is filled ink with paper text. Secondary is an outline. Hover inverts.
- **Cards / Grid items:** no background, no shadow. Image edge-to-edge on top, serif category plus sans meta below, separated by hairlines.
- **Dividers:** 1px solid ink.
- **Inputs:** 1px ink border, paper background, 0px radius.
- **Images:** full-bleed within container, 0px radius, no overlays, no text on photos.

## 5. Layout Principles

> Abschnitt 5 ist aus der Stilbeschreibung abgeleitet („printed design quarterly“), Einzelwerte sind Annahmen.

- Wide, magazine-like grid with generous gutters (≈ 12-column rhythm).
- Large vertical spacing between sections. Whitespace is a design element.
- Lists and grids are separated by hairlines rather than gaps or boxes.

## 6. Depth & Elevation

Flat. No shadows, no blur, no layered cards. Depth comes only from photography.

## 7. Do's and Don'ts

**Do**
- Use `#4a0a05` for all text, borders and links.
- Pair Caslon (headlines, categories, wordmark) with the neo-grotesque (everything else).
- Let photography fill containers edge to edge with 0px radius and 0px padding.
- Separate with 1px hairlines.

**Don't**
- Introduce a second colour, gradient or shadow.
- Round corners.
- Put text, badges or overlays on photographs.
- Use the serif for UI or body text.

---

## 8. Anpassungen für Arztpraxis

Verbindliche Abweichungen vom Original für die Website der Zahnarztpraxis Dr. Adali. Alle Abschnitte 1–7 gelten weiter, soweit hier nichts anderes steht. Technische Umsetzung: `src/styles/global.css` (Tokens im Tailwind-v4-`@theme`) und `src/styles/fonts.css`.

### 8.1 Farben und Kontraste (WCAG 2.2 AA)

Die Tailwind-Standardpaletten sind im Theme entfernt (`--color-*: initial`, `--shadow-*: initial`, `--radius-*: initial`). Fremdfarben, Schatten und Rundungen lassen sich dadurch technisch nicht verwenden.

| Token | Hex | Verwendung | Kontrast auf Paper |
|---|---|---|---|
| `--color-paper` | `#fafaf9` | einzige Fläche | – |
| `--color-ink` | `#4a0a05` | Text, Linien, Links, Buttons, Fokus | **15,0 : 1** (AAA) |
| `--color-ink-muted` | `#764642` | Sekundärtext (Unterzeilen, Meta) | **7,4 : 1** (AAA) |
| `--color-ink-subtle` | `#885e5a` | Platzhaltertext in Feldern, kleinste Meta-Angaben (Untergrenze) | **5,3 : 1** (AA) |

- Die abgestuften Töne sind reine Mischungen aus Oxblood und Cream, also keine neue Farbe. Hellere Stufen als `#885e5a` sind für Text **verboten** (`#906a67` läge mit 4,5 : 1 an der Grenze, `#997673` mit 3,9 : 1 darunter).
- Linien, Formularrahmen und Fokusrahmen sind immer volles Oxblood (15 : 1, deutlich über den 3 : 1 für UI-Komponenten).
- Paper-Text auf Ink-Flächen (gefüllter Button): 15,0 : 1.
- Fokus: 2px Oxblood-Outline mit 3px Abstand an jedem fokussierbaren Element (WCAG 2.4.7 / 2.4.11).
- Bildplatzhalter („FOTO FOLGT“) sind Paper-Flächen mit 1px-Haarlinie, keine getönten Flächen.

### 8.2 Schriften

Caslon Ionic und Mier A sind kommerziell. Ersatz:

| Rolle | Original | Ersatz | Schnitte |
|---|---|---|---|
| Große Headlines (Hero, H1, H2) | Caslon Ionic | **Libre Caslon Display** | 400 |
| Kategorien, H3, Wortmarke | Caslon Ionic | **Libre Caslon Text** | 400, 400 italic, 700 |
| Fließtext, Navigation, UI | Mier A | **Inter** | 400, 500, 600 |

- **Begründung für Inter (statt Instrument Sans):** große x-Höhe und offene Formen, sehr gut lesbar für ältere Patienten bei 18px. Neutral-grotesk wie Mier A. Instrument Sans hätte die Zeichenabdeckung ebenfalls bestanden.
- **Lizenz:** SIL Open Font License 1.1. Die Lizenztexte liegen unter `public/fonts/OFL-*.txt`. Quelle sind die Fontsource-Pakete 5.3.0 (npm).
- **Selbst gehostet** als woff2 unter `/public/fonts/`. Kein Google-Fonts-CDN (DSGVO).
- **Zeichenabdeckung geprüft** (fontTools, cmap aller Schnitte) für
  `ä ö ü Ä Ö Ü ß ñ Ñ á é í ó ú ¿ ¡ ç Ç ğ Ğ ı İ ş Ş – — „ “ ” ‚ ‘ ’ « » · € §`.
  Ergebnis: **vollständig** in Libre Caslon Display, Libre Caslon Text (alle Schnitte) und Inter (alle Schnitte). Ein Ausweichen auf eine andere Serife war nicht nötig.
- **Subsetting:** pro Schnitt zwei Dateien, `latin` (U+0000–00FF u. a.) und `latin-ext` (U+0100–02BA u. a., enthält Latin Extended-A vollständig). Beide sind per `unicode-range` eingebunden. Der Browser lädt `latin-ext` nur bei Bedarf, z. B. für ğ ş ı İ auf den türkischen Seiten.
- **Preload** nur für `libre-caslon-display-latin-400` und `inter-latin-400` (LCP).
- `font-display: swap`.
- Die Libre Caslon Text Italic setzt das „&“ als ornamentale Ligatur. Gewollt, entspricht der klassischen Caslon.

### 8.3 Typografie-Skala

Die Headlines werden größer als im Original (24px) und responsiv mit `clamp()` gesetzt. Fließtext mindestens 18px (ältere Patienten). Es gibt **nur diese Stufen**, keine Zwischengrößen:

| Token / Klasse | Schrift | Größe | Zeilenhöhe |
|---|---|---|---|
| `.hero-title` / `text-hero` | Libre Caslon Display | `clamp(42px → 76px)` | 1.03 |
| `h1` / `text-h1` | Libre Caslon Display | `clamp(36px → 56px)` | 1.08 |
| `h2` / `text-h2` | Libre Caslon Display | `clamp(28px → 40px)` | 1.15 |
| `h3`, `.kategorie` / `text-h3` | Libre Caslon Text | `clamp(22px → 26px)` | 1.25 |
| `.lead` / `text-lead` | Inter | 21px | 1.55 |
| `body` / `text-body` | Inter | **18px** | 1.65 |
| `text-ui` (Navigation, Buttons, Captions) | Inter | 16px | 1.45 |
| `.label` (Uppercase) | Inter 500 | 14px, +0,08em | 1.4 |

- **Lange Übersetzungen:** Spanisch und Deutsch laufen 20–30 % länger als Englisch. Buttons, Navigation und Sprachumschalter haben **keine festen Breiten**. Sie wachsen mit dem Inhalt und brechen per `flex-wrap` um. Der Header ist zweizeilig: oben Wortmarke, Sprachen, Telefon und Termin, darunter die Navigation mit Haarlinie. Längere Navigationspunkte verdrängen so nichts.
- **Uppercase** nur per CSS (`text-transform: uppercase` in `.label`), niemals im Quelltext. `<html lang>` ist pro Sprache korrekt gesetzt. So wird im Türkischen `i → İ` umgesetzt (getestet: „iletişim ve randevu“ → „İLETİŞİM VE RANDEVU“).
- `hyphens: auto` und `text-wrap: pretty` im Fließtext, `text-wrap: balance` in Überschriften.
- Mindest-Klickfläche: 44 × 44px für Navigation, Sprachumschalter, Wortmarke und Telefonlink (`.nav-link`), 48px Höhe für Buttons und Felder. Das liegt deutlich über WCAG 2.5.8 (24px). Gemessen bei 320–1440px.

### 8.4 Abstände und Raster

- 8er-Raster (`--spacing: 0.25rem`).
- Seitenrand `--spacing-gutter`: `clamp(16px → 40px)`.
- Sektionsabstand `--spacing-section`: `clamp(72px → 160px)`.
- Seitenraster max. 1440px (`--container-page`), Lesebreite max. 42rem ≈ 70 Zeichen (`--container-text`).

### 8.5 Conversion-Elemente

- **Primär:** gefüllter Oxblood-Button „Online-Termin buchen“. Er führt zu Doctolib, ohne Doctolib-Logo und ohne Doctolib-Blau. Darunter steht im Sekundärtext „über Doctolib“, der Link ist als „öffnet in neuem Fenster“ gekennzeichnet.
- **Sekundär:** Outline-Button „030 44 26 84 3 anrufen“ (`tel:`-Link).
- **Hover:** Inversion (Ink ↔ Paper), keine neue Farbe.
- **Kompakter Header-Button** „Online-Termin“ (`.btn-compact`, 44px hoch).
- **Mobile Leiste** (`< md`): fixiert unten, Cream Paper, 1px-Oxblood-Haarlinie oben, drei gleich breite Felder mit kleinen Uppercase-Labels (Online-Termin · Anrufen · Anfahrt), getrennt durch Haarlinien. Sie berücksichtigt `safe-area-inset-bottom`. Der Seiteninhalt bekommt unten entsprechend Abstand.
- **Kein WhatsApp** (Gesundheitsdaten, DSGVO).

### 8.6 Hero und Fotos

- Im Hero dürfen neben der Headline nur eine kurze Unterzeile und die CTAs stehen. Diese stehen **neben** oder **unter** dem Foto, nie darauf.
- Keine Texte, Badges, Siegel oder Overlays auf Fotos, in keiner Sprache.
- Fotos randlos im Container, 0px Radius. Einheitlicher, warmer Bildlook (siehe Phase 3).

### 8.7 Sprachumschalter

- Im Header als Kürzel **„DE · EN · ES · TR“** im Stil der Navigation (Inter 16px). Die aktive Sprache ist unterstrichen (`aria-current`). Keine Flaggen.
- Jeder Link trägt `lang` und `hreflang`. Der sichtbare Text ist das Kürzel, für Screenreader zusätzlich die Eigenbezeichnung („Türkçe“ usw.).
- Auf dem Handy steht er gut sichtbar oben unter der Wortmarke und zusätzlich im Menü.
- Der zugängliche Name enthält das sichtbare Kürzel („DE Deutsch“), damit Sprachsteuerung per „DE“ funktioniert (WCAG 2.5.3 Label in Name).

### 8.8 Menü und Header

- Ab 1024px ist der Header zweizeilig: oben Wortmarke, Sprachumschalter, Telefon und Termin-Button, darunter die Navigation, getrennt durch eine Haarlinie. So verdrängen längere Übersetzungen nichts.
- Unter 1024px gibt es ein Menü als `<details>`/`<summary>`. Es funktioniert ohne JavaScript und enthält Navigation, Sprachumschalter und Anruf-Button.

### 8.9 Technische Leitplanken

- Keine Inline-Styles (`style="…"`) und keine Inline-Event-Handler (`onclick="…"`). Damit bleibt eine strikte Content-Security-Policy möglich (Phase 7).
- Beim Seitenaufruf gibt es keine externen Requests. Schriften und Bilder liegen lokal.

### 8.10 Ausdrücklich unverändert

Eine Tinte, eine Fläche, keine Schatten, keine Verläufe, keine Rundungen, Haarlinien als Trenner, Serife nur für Headlines, Kategorien und Wortmarke, Fotografie trägt die Gestaltung.
