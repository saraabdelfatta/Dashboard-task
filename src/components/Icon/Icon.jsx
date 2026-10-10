/**
 * Icon
 * What: tiny set of inline SVG icons so we need no icon library.
 * Used in: Sidebar, TopBar, CampusPanel, ChatList.
 *
 * Props:
 *  - name: "home" | "book" | "search" | "bell" | "chat" | "menu" |
 *          "chevron-right" | "chevron-up" | "chevron-down" | "collapse"
 *  - size: number in px (default 16)
 *
 * Decision: icons are decorative (aria-hidden); the button that holds
 * them carries the accessible label.
 */
const paths = {
  home: "M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10",
  book: "M4 6c0-1 1-2 2-2h12v14H6c-1 0-2 1-2 2V6zM4 20h14",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5",
  bell: "M6 16V11a6 6 0 0112 0v5l2 2H4l2-2zM10 21h4",
  chat: "M4 5h16v11H9l-5 4V5z",
  menu: "M4 7h16M4 12h16M4 17h16",
  "chevron-right": "M9 6l6 6-6 6",
  "chevron-up": "M6 15l6-6 6 6",
  "chevron-down": "M6 9l6 6 6-6",
  collapse: "M4 5h16v14H4zM9 5v14M15 9l-3 3 3 3",
};

export default function Icon({ name, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
