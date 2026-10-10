/**
 * Sidebar
 * What: left navigation (logo + Dashboard / Courses / Assignments).
 * Used in: App, once.
 *
 * Props:
 *  - items: [{ id, label, icon }]  navigation entries
 *  - activeId: id of the current page (gets the highlighted style)
 *  - isOpen: boolean. Only matters on phone, where the sidebar is hidden
 *            and slides in when the hamburger button is pressed.
 *  - onClose: called when the user taps a link or the dark backdrop (phone)
 *
 * Decision: no router (not required), so links are buttons that only
 * report the click. Swap for <Link> when routing is added.
 */
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";

export default function Sidebar({ items, activeId, isOpen, onClose }) {
  return (
    <>
      {/* Backdrop only exists visually on phone (see CSS) */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.top}>
          <Logo />
          <Icon name="collapse" size={18} />
        </div>

        <p className={styles.label}>Navigation</p>
        <nav aria-label="Main">
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.link} ${item.id === activeId ? styles.active : ""}`}
                  aria-current={item.id === activeId ? "page" : undefined}
                  onClick={onClose}
                >
                  <Icon name={item.icon} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
