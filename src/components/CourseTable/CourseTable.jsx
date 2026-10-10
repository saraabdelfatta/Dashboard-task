/**
 * CourseTable
 * What: the "My Courses" list: a heading plus one CourseRow per course.
 * Used in: App, main column under the featured cards.
 *
 * Props:
 *  - courses: array of course objects (see CourseRow for the shape)
 *  - onOpen(id): forwarded to each row (optional)
 *
 * Decision: the Figma has four vertical columns. Here each course is one
 * row, and the header is just one more row using the same grid template.
 * We use div + ARIA roles (not <table>) because the row layout changes
 * completely on phone, which a real <table> makes hard.
 */
import Card from "../Card/Card";
import CourseRow from "../CourseRow/CourseRow";
import styles from "./CourseTable.module.css";

export default function CourseTable({ courses, onOpen }) {
  return (
    <section>
      <h2 className={styles.heading}>My Courses</h2>
      <Card className={styles.card}>
        <div role="table" aria-label="My courses" className={styles.table}>
          {/* Header row: hidden on phone because each row is self-explanatory there */}
          <div className={styles.header} role="row">
            <span role="columnheader">Course</span>
            <span role="columnheader">Progress</span>
            <span role="columnheader">Status</span>
            <span role="columnheader" />
          </div>
          {courses.map((course) => (
            <CourseRow key={course.id} course={course} onOpen={onOpen} />
          ))}
        </div>
      </Card>
    </section>
  );
}
