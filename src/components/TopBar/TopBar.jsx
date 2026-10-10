/**
 * TopBar
 * What: header strip above the content.
 *   Desktop: page title on the left, search/bell buttons and profile chip on the right.
 *   Phone:   logo on the left, chat and hamburger buttons on the right.
 * Used in: App, once.
 *
 * Props:
 *  - title: string, page title (desktop only)
 *  - user: { name, avatar }  avatar is an image URL or null (placeholder circle)
 *  - onMenuClick: called when the phone hamburger button is pressed
 *
 * Decision: ONE component renders both versions and CSS hides the parts that
 * don't belong, so there is no duplicated header code per screen size.
 */
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import styles from "./TopBar.module.css";

export default function TopBar({ title, user, onMenuClick }) {
  return (
    <header className={styles.bar}>
      <div className={styles.logo}><Logo /></div>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.actions}>
        {/* Desktop-only actions */}
        <button className={`${styles.iconButton} ${styles.desktopOnly}`} aria-label="Search">
          <Icon name="search" size={14} />
        </button>
        <button className={`${styles.iconButton} ${styles.desktopOnly}`} aria-label="Notifications">
          <Icon name="bell" size={14} />
        </button>
        <div className={`${styles.profile} ${styles.desktopOnly}`}>
          {user.avatar ? (
            <img className={styles.avatar} src={user.avatar} alt="" />
          ) : (
            <span className={styles.avatar} aria-hidden="true" />
          )}
          {user.name}
        </div>

        {/* Phone-only actions */}
        <button className={`${styles.iconButton} ${styles.phoneOnly}`} aria-label="Chats">
          <Icon name="chat" size={18} />
        </button>
        <button
          className={`${styles.iconButton} ${styles.phoneOnly}`}
          aria-label="Open menu"
          onClick={onMenuClick}
        >
          <Icon name="menu" size={18} />
        </button>
      </div>
    </header>
  );
}
