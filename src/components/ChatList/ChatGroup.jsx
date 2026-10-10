/**
 * ChatGroup
 * What: one expandable chat topic (e.g. "Poetry") with its channels inside.
 * Used in: ChatList, once per group.
 *
 * Props:
 *  - group: { title, hasUnread, defaultOpen?, channels: [{ id, label, badge? }] }
 *      hasUnread  -> small red dot next to the title
 *      badge      -> red number pill on a channel
 *
 * Local state: `open` (expanded or not). Kept here, not in the parent,
 * because every group opens and closes independently.
 */
import { useState } from "react";
import CourseThumb from "../CourseThumb/CourseThumb";
import Icon from "../Icon/Icon";
import styles from "./ChatGroup.module.css";

export default function ChatGroup({ group }) {
  const [open, setOpen] = useState(Boolean(group.defaultOpen));

  return (
    <li className={styles.group}>
      <button
        className={styles.header}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <CourseThumb size={16} />
        <span className={styles.title}>{group.title}</span>
        {group.hasUnread && <span className={styles.dot} aria-label="Unread messages" />}
        <Icon name={open ? "chevron-up" : "chevron-down"} size={12} />
      </button>

      {open && (
        <ul className={styles.channels}>
          {group.channels.map((ch) => (
            <li key={ch.id} className={styles.channel}>
              {ch.label}
              {ch.badge && <span className={styles.badge}>{ch.badge}</span>}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
