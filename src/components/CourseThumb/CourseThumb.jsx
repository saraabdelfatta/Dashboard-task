/**
 * CourseThumb
 * What: small square course picture.
 * Used in: CourseCard (large) and CourseRow (small).
 *
 * Props:
 *  - src: image URL (optional). When missing, a colored placeholder is shown.
 *  - color: placeholder background color (default grey)
 *  - size: px width/height (default 32)
 *  - alt: text for the image; leave "" because the course title is next to it
 *
 * How to use real images: export them from Figma, put them in src/assets/,
 * import them in dashboardData.js and set `src` on each course.
 */
import styles from "./CourseThumb.module.css";

export default function CourseThumb({ src, color = "#ece9e3", size = 32, width, height, radius, alt = "" }) {
  const box = {
    width: width ?? size,
    height: height ?? size,
    ...(radius !== undefined && { borderRadius: radius }),
  };
  return src ? (
    <img className={styles.thumb} style={box} src={src} alt={alt} />
  ) : (
    <span className={styles.thumb} style={{ ...box, background: color }} aria-hidden="true" />
  );
}
