# UMG Dashboard

A small React + Vite dashboard prototype designed for a university-style mobile experience.

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
4. Open the local URL shown in the terminal, usually:
   ```text
   http://localhost:5173/
   ```

Optional production build:

```bash
npm run build
```

Optional preview of the production build:

```bash
npm run preview
```

## Questions I would ask the designer

### What I spotted

- The layout feels like a mobile-first student dashboard.
- It has separate areas for stats, courses, campus information, announcements, and chat.
- The interface uses cards, badges, progress bars, and grouped sections to communicate information quickly.
- The design appears optimized for a phone-sized screen.
- The styling is broken into reusable component blocks, which suggests a modular system.

### What I assumed

- This is a mockup or prototype rather than a full production product.
- The data is likely placeholder content used for demonstration.
- The dashboard is meant to be scannable and fast to read on a small screen.
- The visual language is intentionally structured around clarity and organization.
- The app is likely built to show information at a glance rather than support heavy interaction.

### Questions to ask

- Is this designed primarily for students, lecturers, or admin users?
- Is the target device mobile-only, or should it also adapt to tablet and desktop screens?
- Are these elements static demo data or connected to a real backend?
- Should the dashboard be mostly read-only, or do we expect filters, navigation, and actions later?
- What mood is the design aiming for: academic, modern, friendly, or premium?
- Are accessibility requirements important for contrast, readability, and touch targets?
- Would this eventually include real-time updates, notifications, or personalized data?

## What I would do next

- Review whether spacing, typography, and colors are consistent across the whole dashboard.
- Check the layout on multiple screen sizes to make sure it remains readable on smaller devices.
- Confirm that the app is accessible and usable for keyboard and screen-reader users.
- Identify reusable patterns and decide whether the design should scale into a larger product.
- If needed, connect the dashboard to real data and add interaction states such as filtering and navigation.
- Improve any sections that feel crowded or overly dense so the information remains easy to scan.

## Roughly how long I spent

Approximately 1 to 2 hours reviewing the project, checking the setup, testing the build, and preparing this README.

## Project notes

This project uses:

- React
- Vite
- CSS Modules

The project is ready to install and run using the commands above.
