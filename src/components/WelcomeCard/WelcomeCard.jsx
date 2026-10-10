/**
 * WelcomeCard
 * What: greeting box at the top of the dashboard.
 * Used in: App, once, top of the main column.
 *
 * Props:
 *  - name: string, the student's name
 *  - message: string, short motivational line under the greeting
 */
import Card from "../Card/Card";
import styles from "./WelcomeCard.module.css";

export default function WelcomeCard({ name, message }) {
  return (
    <Card className={styles.welcome}>
      <h2 className={styles.heading}>Welcome back, {name}</h2>
      <p className={styles.message}>{message}</p>
    </Card>
  );
}
