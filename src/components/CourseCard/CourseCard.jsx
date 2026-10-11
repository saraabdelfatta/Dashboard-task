/**
 * CourseCard
 * What: featured course with a picture, title, progress and Continue button.
 * Used in: App, the two cards next to CampusPanel.
 *
 * Props:
 *  - course: { id, title, done, total, thumb, image? }
 *  - onContinue(id): called when Continue is pressed (optional)
 */
import Card from "../Card/Card";
import CourseThumb from "../CourseThumb/CourseThumb";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./CourseCard.module.css";

export default function CourseCard({ course, onContinue }) {
  return (
    <Card as="article" className={styles.card}>
      <CourseThumb src={course.image} color={course.thumb} width={101} height={93} radius={8} />
      <div className={styles.body}>
        <h3 className={styles.title}>{course.title}</h3>
        <ProgressBar done={course.done} total={course.total} />
        <button className={styles.button} onClick={() => onContinue?.(course.id)}>
          Continue
        </button>
      </div>
    </Card>
  );
}
