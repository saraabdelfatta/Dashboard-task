/**
 * ChatList
 * What: "Chats" card with subject tabs (English / Science) and the
 *       expandable chat groups of the selected tab.
 * Used in: App, right column (bottom).
 *
 * Props:
 *  - chats: object keyed by tab name -> array of groups (see ChatGroup)
 *      e.g. { English: [...], Science: [...] }
 *  - onViewAll: called when "View all Chats" is pressed (optional)
 *
 * Local state: `tab`, the selected tab. Tab names come from the keys of
 * `chats`, so adding a subject in the data adds a tab automatically.
 */
import { useState } from "react";
import Card from "../Card/Card";
import ChatGroup from "./ChatGroup";
import styles from "./ChatList.module.css";

export default function ChatList({ chats, onViewAll }) {
  const tabs = Object.keys(chats);
  const [tab, setTab] = useState(tabs[0]);

  return (
    <Card>
      <div className={styles.header}>
        <h2 className={styles.heading}>Chats</h2>
        <button className={styles.link} onClick={onViewAll}>View all Chats</button>
      </div>

      <div className={styles.tabs} role="tablist">
        {tabs.map((name) => (
          <button
            key={name}
            role="tab"
            aria-selected={name === tab}
            className={`${styles.tab} ${name === tab ? styles.tabActive : ""}`}
            onClick={() => setTab(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {/* key={tab} resets each group's open/closed state when switching tabs */}
      <ul key={tab} className={styles.groups}>
        {chats[tab].map((group) => (
          <ChatGroup key={group.id} group={group} />
        ))}
      </ul>
    </Card>
  );
}
