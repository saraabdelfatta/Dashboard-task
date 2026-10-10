/**
 * AnnouncementList
 * What: "Announcements" card with a "View all" link and a list of notices.
 * Used in: App, right column (below the chart).
 *
 * Props:
 *  - items: [{ id, title, text }]
 *  - onViewAll: called when "View all" is pressed (optional)
 *
 * The grey square is a placeholder for an image/icon from the design.
 */
import Card from "../Card/Card";
import styles from "./AnnouncementList.module.css";

export default function AnnouncementList({ items, onViewAll }) {
  return (
    <Card>
      <div className={styles.header}>
        <h2 className={styles.heading}>Announcements</h2>
        <button className={styles.link} onClick={onViewAll}>View all</button>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.image} aria-hidden="true" />
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
