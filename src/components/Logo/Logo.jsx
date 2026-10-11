/**
 * Logo
 * What: the "UMG" wordmark.
 * Used in: Sidebar (desktop) and TopBar (phone).
 * Replace the text with an <img> exported from Figma when you have it.
 * What: the "UMG" wordmark (SVG exported from Figma).
 * Used in: Sidebar (desktop) and TopBar (phone).
 */


import styles from "./Logo.module.css";
import umgLogo from "../../assets/images/UMG.svg";

export default function Logo() {
  return <img src={umgLogo} alt="UMG Logo" className={styles.logo} />;
}
