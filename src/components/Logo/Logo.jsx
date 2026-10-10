/**
 * Logo
 * What: the "UMG" wordmark.
 * Used in: Sidebar (desktop) and TopBar (phone).
 * Replace the text with an <img> exported from Figma when you have it.
 */
import styles from "./Logo.module.css";

export default function Logo() {
  return <span className={styles.logo}>UMG</span>;
}
