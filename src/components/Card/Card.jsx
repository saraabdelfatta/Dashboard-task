/**
 * Card
 * What: the white rounded box that wraps every panel on the page.
 * Used in: WelcomeCard, CampusPanel, CourseCard, CourseTable, StatsChart,
 *          AnnouncementList, ChatList.
 *
 * Props:
 *  - as: HTML tag to render, default "section" (use "article" for list items)
 *  - className: extra class for layout/padding tweaks from the parent
 *  - children: content
 *
 * Decision: the Figma repeats this box by hand ~8 times. One component
 * means border, radius and padding change in one place.
 */
import styles from "./Card.module.css";

export default function Card({ as: Tag = "section", className = "", children }) {
  return <Tag className={`${styles.card} ${className}`}>{children}</Tag>;
}
