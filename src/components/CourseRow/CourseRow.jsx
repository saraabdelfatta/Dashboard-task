/**
 * CourseRow
 * What: ONE course shown as ONE row: picture + title/campus, progress,
 *       status badge and an action (Continue or View).
 * Used in: CourseTable, once per course.
 *
 * Props:
 *  - course: { id, title, campus, done, total, status, thumb, image? }
 *  - onOpen(id): called when Continue/View is pressed (optional)
 *
 * Decision: the action is derived from the status (in progress -> "Continue",
 * completed -> "View") so the data doesn't need to store button labels.
 *
 * The grid columns come from the CSS variable --course-cols set by
 * CourseTable, so header and rows always line up.
 */
import CourseThumb from "../CourseThumb/CourseThumb";
import ProgressBar from "../ProgressBar/ProgressBar";
import StatusBadge from "../StatusBadge/StatusBadge";
import styles from "./CourseRow.module.css";

export default function CourseRow({ course, onOpen }) {
  const isDone = course.status === "completed";

  return (
    <div className={styles.row} role="row">
      <div className={`${styles.cell} ${styles.course}`} role="cell">
        <CourseThumb src={course.image} color={course.thumb} size={32} />
        <div className={styles.names}>
          <span className={styles.title}>{course.title}</span>
          <span className={styles.campus}>{course.campus}</span>
        </div>
      </div>

      <div className={`${styles.cell} ${styles.progress}`} role="cell">
        <ProgressBar done={course.done} total={course.total} />
      </div>

      <div className={`${styles.cell} ${styles.status}`} role="cell">
        <StatusBadge status={course.status} />
      </div>

      <div className={`${styles.cell} ${styles.action}`} role="cell">
        <button
          className={isDone ? styles.view : styles.continue}
          onClick={() => onOpen?.(course.id)}
        >
          {isDone ? "View" : "Continue"}
        </button>
      </div>
    </div>
  );
}
