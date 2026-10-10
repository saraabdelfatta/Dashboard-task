/**
 * StatusBadge
 * What: small colored pill showing a course status.
 * Used in: CourseRow.
 *
 * Props:
 *  - status: "in-progress" (orange) | "completed" (green)
 *
 * To add a new status, add one entry to `config` and one class in the CSS.
 */
import styles from "./StatusBadge.module.css";

const config = {
  "in-progress": { label: "In Progress", className: styles.inProgress },
  completed: { label: "Completed", className: styles.completed },
  "not-started": { label: "Not Started", className: styles.inProgress },
};

export default function StatusBadge({ status }) {
  const item = config[status] ?? {
    label: "Not Started",
    className: styles.inProgress,
  };
  const { label, className } = item;
  return <span className={`${styles.badge} ${className}`}>{label}</span>;
}
