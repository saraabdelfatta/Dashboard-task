/**
 * ProgressBar
 * What: "6/44 lessons ........ 20%" label row plus a green bar.
 * Used in: CourseCard and CourseRow.
 *
 * Props:
 *  - done: number of finished lessons
 *  - total: total lessons
 *
 * Decision: the percentage is CALCULATED from done/total instead of being
 * stored, so the label and the bar can never disagree.
 */
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ done, total }) {
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className={styles.wrap}>
      <div className={styles.labels}>
        <span>
          <strong>{done}</strong>/{total} lessons
        </span>
        <strong>{percent}%</strong>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
