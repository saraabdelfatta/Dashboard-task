# UMG Dashboard

A small React + Vite dashboard prototype designed for a university-style mobile experience. The interface is data-driven from `src/data/dashboard-data.json`, and the UI is structured to reuse components instead of duplicating blocks by hand.

## Install and run steps

1. Open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app in development mode:
   ```bash
   npm run dev
   ```

Optional production build:

```bash
npm run build
```

Optional preview of the production build:

```bash
npm run preview
```

## Requirement checklist

This README covers the brief requirements and the documentation expectations from the design task:

- Install and run steps are included.
- Questions to ask the designer are documented below.
- What I spotted and what I assumed are both listed.
- What I would do next is included.
- Roughly how long I spent is noted.
- The codebase includes reusable component comments and documented props/in-line notes to match the front-end brief.

## Questions I would ask the designer

### What I spotted

- The layout is clearly a mobile-first student dashboard.
- It includes separate areas for stats, courses, campus details, announcements, and chat.
- The UI uses cards, badges, progress bars, and grouped sections to communicate information quickly.
- The design looks optimized for phone-sized screens with a compact but readable layout.
- Repeated blocks suggest a modular component structure rather than hard-coded repeated markup.

### What I assumed

- This is a prototype or design mockup rather than a production system.
- The data is placeholder content used to demonstrate the layout and interactions.
- The dashboard is designed for fast scanning and quick information retrieval on small screens.
- The visual language is intentionally structured around clarity, hierarchy, and consistency.
- The app is meant to show information at a glance rather than support complex flows or backend logic.

### Questions to ask

- Is the dashboard primarily for students, lecturers, or admin users?
- Is the target device mobile-only, or should it scale for tablets and desktops as well?
- Are these sections backed by real data, or are they static demo placeholders?
- Should the dashboard be read-only, or do we expect navigation, filters, and actions later on?
- What tone is the design aiming for: academic, modern, friendly, or premium?
- Are accessibility requirements important for contrast, readability, and touch targets?
- Will the product need real-time notifications, personalized data, or future integrations?

## What I would do next

- Review spacing, type scale, and color consistency across the entire dashboard.
- Check the layout at multiple screen sizes to ensure readable behavior on smaller devices.
- Validate accessibility for keyboard use and screen-reader support.
- Identify reusable patterns and decide how the design could scale into a larger application.
- Connect the dashboard to real data if required and add lightweight interactive states.
- Improve any dense areas so information remains easy to scan and understand.

## Roughly how long I spent

Approximately 1 to 2 hours reviewing the brief, validating the setup, checking the build, and preparing the documentation.

## Project notes

This project uses:

- React
- Vite
- Plain CSS modules

The project is ready to install and run using the commands above. The component files also include short top-of-file explanations, prop documentation, and inline notes for non-obvious implementation decisions in line with the brief requirements.
