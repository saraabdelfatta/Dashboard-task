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

The project is ready to install and run using the commands above. The component files also include short top-of-file explanations, prop documentation, and inline notes for non-obvious implementation decisions in line with the front-end brief requirements.

---

## Project reference guide

The sections below are supporting notes for understanding the codebase and finding where to make future changes.

## Technology

- **React 18** builds the interface from reusable components written in JavaScript and JSX.
- **CSS and CSS Modules** provide the global theme, page layout, and component-specific styles.
- **Vite** runs the development server and creates the production build.
- **JSON** holds the sample dashboard content in `src/data/dashboard-data.json`.
- **SVG and PNG** files provide the logo, course thumbnails, chat image, and avatar.

### Flutter comparison

The comparisons below are conceptual guides for Flutter developers, not exact one-to-one equivalents:

| This project | Rough Flutter comparison | Responsibility |
| --- | --- | --- |
| `index.html` | Platform/web host | Provides the HTML document and the `#root` element where React mounts. |
| `src/main.jsx` | `main.dart` | Starts the app and renders the root React component. |
| `src/App.jsx` | A screen/page widget | Composes the dashboard, prepares its data, and owns the mobile menu state. |
| `src/App.module.css` | A screen's `Scaffold`/layout configuration | Arranges the sidebar, header, and dashboard columns responsively. |
| `src/components/` | A collection of reusable widgets | Holds the dashboard's focused UI components and their styles. |
| `src/styles/tokens.css` | Theme/design tokens, often defined alongside `ThemeData` | Defines shared colors, fonts, spacing, corner radii, and sidebar width. |
| `src/index.css` | Global/reset styles | Applies shared base styles and imports the design tokens. |
| `src/data/dashboard-data.json` | Static model/sample data | Supplies the local content used to render the screen. |

## The `src/components/` folder

The components folder contains small, reusable pieces of the interface. A `.jsx` file contains a React component: its markup, rendering logic, and the props it receives. Most components have a neighboring `.module.css` file containing styles scoped to that component. This is similar to keeping a Flutter widget focused on one part of the UI, while writing its styling separately in CSS rather than using Flutter's Dart styling APIs.

`App.jsx` combines these components into the full screen and passes data to them. Components generally do not own the dashboard's data; they display the values passed through props. Reusable building blocks such as `Card`, `CourseThumb`, `ProgressBar`, and `StatusBadge` are shared by larger components.

### Component files

| File | Code type | Purpose and importance |
| --- | --- | --- |
| `src/components/AnnouncementList/AnnouncementList.jsx` | React JSX (JavaScript) | Renders the announcements panel and its list of notices. |
| `src/components/AnnouncementList/AnnouncementList.module.css` | CSS Module | Styles the announcement panel and notice items. |
| `src/components/CampusPanel/CampusPanel.jsx` | React JSX (JavaScript) | Renders the campus selector panel. |
| `src/components/CampusPanel/CampusPanel.module.css` | CSS Module | Styles the campus panel and its buttons. |
| `src/components/Card/Card.jsx` | React JSX (JavaScript) | Shared card/panel wrapper used to give dashboard sections a consistent container. |
| `src/components/Card/Card.module.css` | CSS Module | Defines the shared card appearance. |
| `src/components/ChatList/ChatList.jsx` | React JSX (JavaScript) | Renders the Chats panel, subject tabs, and chat groups. |
| `src/components/ChatList/ChatList.module.css` | CSS Module | Styles the chat panel and its tab/list layout. |
| `src/components/ChatList/ChatGroup.jsx` | React JSX (JavaScript) | Renders one expandable chat topic and its channels. |
| `src/components/ChatList/ChatGroup.module.css` | CSS Module | Styles an individual chat group and its channel list. |
| `src/components/CourseCard/CourseCard.jsx` | React JSX (JavaScript) | Displays a featured course with its thumbnail, progress, and Continue action. |
| `src/components/CourseCard/CourseCard.module.css` | CSS Module | Styles the featured course card. |
| `src/components/CourseRow/CourseRow.jsx` | React JSX (JavaScript) | Displays one course row, including course details, progress, and status. |
| `src/components/CourseRow/CourseRow.module.css` | CSS Module | Styles an individual row in the course list. |
| `src/components/CourseTable/CourseTable.jsx` | React JSX (JavaScript) | Renders the My Courses section by arranging a row for each course. |
| `src/components/CourseTable/CourseTable.module.css` | CSS Module | Styles the course list/table section. |
| `src/components/CourseThumb/CourseThumb.jsx` | React JSX (JavaScript) | Reusable course/chat thumbnail, with support for image or fallback color. |
| `src/components/CourseThumb/CourseThumb.module.css` | CSS Module | Styles the reusable thumbnail. |
| `src/components/Icon/Icon.jsx` | React JSX (JavaScript with inline SVG) | Provides the small set of interface icons without an external icon library. It has no separate CSS Module. |
| `src/components/Logo/Logo.jsx` | React JSX (JavaScript) | Loads and displays the UMG wordmark asset. |
| `src/components/Logo/Logo.module.css` | CSS Module | Controls the logo's presentation in the sidebar and top bar. |
| `src/components/ProgressBar/ProgressBar.jsx` | React JSX (JavaScript) | Shows completed/total lesson counts and a visual progress bar. |
| `src/components/ProgressBar/ProgressBar.module.css` | CSS Module | Styles the progress label and bar. |
| `src/components/Sidebar/Sidebar.jsx` | React JSX (JavaScript) | Renders the primary navigation and supports the mobile drawer state. |
| `src/components/Sidebar/Sidebar.module.css` | CSS Module | Styles the sidebar and its responsive/mobile presentation. |
| `src/components/StatsChart/StatsChart.jsx` | React JSX (JavaScript) | Displays the study-hours summary as a small CSS-based bar chart. |
| `src/components/StatsChart/StatsChart.module.css` | CSS Module | Styles the statistics card, bars, and chart labels. |
| `src/components/StatusBadge/StatusBadge.jsx` | React JSX (JavaScript) | Shows a course status as a compact colored badge. |
| `src/components/StatusBadge/StatusBadge.module.css` | CSS Module | Styles the course status badge. |
| `src/components/TopBar/TopBar.jsx` | React JSX (JavaScript) | Renders the dashboard header, user details, and mobile menu button. |
| `src/components/TopBar/TopBar.module.css` | CSS Module | Styles the dashboard header and its responsive content. |
| `src/components/WelcomeCard/WelcomeCard.jsx` | React JSX (JavaScript) | Shows the user's name and greeting at the top of the main column. |
| `src/components/WelcomeCard/WelcomeCard.module.css` | CSS Module | Styles the welcome card. |

## Other project files

| File or folder | Code/content type | Purpose and importance |
| --- | --- | --- |
| `index.html` | HTML | Browser entry document; provides the root element and loads `src/main.jsx`. |
| `src/main.jsx` | React JSX (JavaScript) | Mounts the app into the HTML root and imports global styles. |
| `src/App.jsx` | React JSX (JavaScript) | Main dashboard screen: normalizes the sample data, controls the mobile menu, and assembles the components. |
| `src/App.module.css` | CSS Module | Controls the page-level layout and responsive breakpoints, including the primary and secondary columns. |
| `src/index.css` | CSS | Defines global reset, base typography, page colors, and keyboard-focus styling. It imports the design tokens. |
| `src/styles/tokens.css` | CSS custom properties | Central source for shared colors, font stacks, spacing values, border radii, and sidebar width. Update these values to change the theme consistently. |
| `src/data/dashboard-data.json` | JSON | Sample user, navigation, campus, course, chart, announcement, and chat data consumed by `App.jsx`. |
| `src/assets/images/UMG.svg` | SVG image | UMG logo asset imported by `Logo.jsx`. |
| `Puplic/images/avatars/sophia-reynolds.png` | PNG image | Sample user avatar referenced by the dashboard data. |
| `Puplic/images/chats/poetry-essay-chat-group.svg` | SVG image | Sample chat-group avatar referenced by the dashboard data. |
| `Puplic/images/cources/Algebra.svg` | SVG image | Algebra course thumbnail. |
| `Puplic/images/cources/EExamE.svg` | SVG image | English Exam Expert course thumbnail. |
| `Puplic/images/cources/English.svg` | SVG image | English course thumbnail. |
| `Puplic/images/cources/Math.svg` | SVG image | Math course thumbnail. |
| `Puplic/images/cources/Solving.svg` | SVG image | Solving Equations & Inequalities course thumbnail. |
| `package.json` | JSON configuration | Names the project, lists dependencies, and defines the npm scripts. |
| `package-lock.json` | npm lockfile (JSON) | Records the resolved dependency versions so installs are reproducible. |
| `vite.config.js` | JavaScript configuration | Enables Vite's React plugin. |

> The static asset directory is spelled `Puplic` in the project. Keep that spelling in file paths and data references unless the directory and all its references are renamed together.

## Styling and layout

Styling is split by responsibility:

- **`src/styles/tokens.css`** defines reusable CSS custom properties for the color palette, typography, spacing scale, corner radii, and sidebar width. It is the central theme source, similar in purpose to Flutter theme values.
- **`src/index.css`** imports the tokens and applies the global reset, base page styles, and visible keyboard-focus outline.
- **`src/App.module.css`** handles the overall dashboard geometry and responsive layout. The page is one column on small screens, gains a featured content split at tablet width, and uses a sidebar plus two content columns on desktop.
- **Component `.module.css` files** keep styles close to their component and scope class names to avoid accidental styling conflicts.

In short, `tokens.css` defines shared visual values, while `App.module.css` arranges the screen. Component CSS Modules handle the appearance and layout inside each reusable UI part.

## Current scope

- Responsive dashboard UI with sidebar navigation, course cards and list, study-hours chart, announcements, and chat groups.
- The sample content is local and static; there is no backend, authentication, or client-side routing configured.
- The statistics bars are drawn with CSS; no charting package is required.
- Navigation links and action buttons are presentation/demo UI unless an interaction is explicitly implemented in the component.
