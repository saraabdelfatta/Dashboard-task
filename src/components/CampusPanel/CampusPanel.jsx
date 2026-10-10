/**
 * CampusPanel
 * What: small box listing the student's campuses as wide orange buttons.
 * Used in: App, left of the two CourseCards.
 *
 * Props:
 *  - campuses: [{ id, label }]
 *  - onSelect(id): called when a campus button is pressed (optional)
 */
import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import styles from "./CampusPanel.module.css";

export default function CampusPanel({ campuses, onSelect }) {
  return (
    <Card className={styles.panel}>
      <h3 className={styles.heading}>Campuses</h3>
      <ul className={styles.list}>
        {campuses.map((c) => (
          <li key={c.id}>
            <button className={styles.button} onClick={() => onSelect?.(c.id)}>
              {c.label}
              <Icon name="chevron-right" size={12} />
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
