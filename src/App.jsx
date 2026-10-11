/**
 * it is like the screen.dart file in flutter
 * App
 * What: the whole Dashboard page. It only ASSEMBLES components and passes
 *       data; it contains no visual styling of its own beyond layout.
 * Used in: main.jsx (root).
 *
 * Layout (see App.module.css):
 *   desktop >= 1024px:  [Sidebar] [ TopBar / (main column | side column) ]
 *   phone   <  1024px:  one column; Sidebar becomes a slide-in drawer.
 *
 * State: only `menuOpen` (phone drawer). Everything else is static data
 * from data/dashboard-data.json, since backend/auth/routing are out of scope.
 */

import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import CampusPanel from "./components/CampusPanel/CampusPanel";
import CourseCard from "./components/CourseCard/CourseCard";
import CourseTable from "./components/CourseTable/CourseTable";
import StatsChart from "./components/StatsChart/StatsChart";
import AnnouncementList from "./components/AnnouncementList/AnnouncementList";
import ChatList from "./components/ChatList/ChatList";
import dashboardData from "./data/dashboard-data.json";
import styles from "./App.module.css";

const normalizeData = (data) => {
  const user = {
    ...data.user,
    avatar: data.user.avatarUrl,
  };

  const navItems = data.navigation.map((item) => ({
    ...item,
    icon: item.icon === "briefcase" ? "book" : item.icon,
  }));

  const campuses = data.campuses;

  const featuredCourses = data.continueLearning.map((course) => ({
    id: course.id,
    title: course.title,
    done: course.lessonsCompleted,
    total: course.lessonsTotal,
    thumb: course.thumbnailUrl ?? "#6b4a2b",
    //this is responsible for the image of the course card, 
    // if the thumbnailUrl is null, it will use the default color #6b4a2b
    image: course.thumbnailUrl,    // ← NEW: the picture path
  }));

  const courses = data.courses.map((course) => ({
    id: course.id,
    title: course.title,
    campus: course.campusLabel,
    done: course.lessonsCompleted,
    total: course.lessonsTotal,
    status: course.status === "in_progress" ? "in-progress" : course.status,
    thumb: course.thumbnailUrl ?? "#6b4a2b",
     image: course.thumbnailUrl,    // ← NEW: the picture path
  }));

  const hoursSpent = {
    total: data.hoursSpent.total,
    startLabel: data.hoursSpent.days[0]?.label ?? "",
    endLabel:
      data.hoursSpent.days[data.hoursSpent.days.length - 1]?.label ?? "",
    values: data.hoursSpent.days.map((day) => day.hours),
    axisMax: data.hoursSpent.axisMax,
  };

  const announcements = data.announcements.map((item) => ({
    id: item.id,
    title: item.title,
    text: item.body,
  }));

  const chats = Object.fromEntries(
    data.chats.tabs.map((tab) => {
      const groups = data.chats.groups
        .filter((group) => group.tabId === tab.id)
        .map((group) => ({
          id: group.id,
          title: group.name,
          image: group.avatarUrl,
          hasUnread: group.hasUnread,
          defaultOpen: group.defaultExpanded,
          channels: group.channels.map((channel) => ({
            id: channel.id,
            label: `# ${channel.name}`,
            badge: channel.unreadCount > 0 ? channel.unreadCount : undefined,
          })),
        }));

      return [tab.label, groups];
    }),
  );

  return {
    user,
    navItems,
    campuses,
    featuredCourses,
    courses,
    hoursSpent,
    announcements,
    chats,
  };
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    user,
    navItems,
    campuses,
    featuredCourses,
    courses,
    hoursSpent,
    announcements,
    chats,
  } = normalizeData(dashboardData);

  return (
    <div className={styles.shell}>
      <Sidebar
        items={navItems}
        activeId="dashboard"
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className={styles.main}>
        <TopBar
          title="Dashboard"
          user={user}
          onMenuClick={() => setMenuOpen(true)}
        />

        <div className={styles.content}>
          <div className={styles.primary}>
            <WelcomeCard
              name={user.name}
              message={`"${dashboardData.user.greetingQuote}"`}
            />

            <div className={styles.featured}>
              <CampusPanel campuses={campuses} />
              <div className={styles.featuredCourses}>
                {featuredCourses.map((c) => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </div>
            </div>

            <CourseTable courses={courses} />
          </div>

          <aside className={styles.secondary}>
            <StatsChart {...hoursSpent} />
            <AnnouncementList items={announcements} />
            <ChatList chats={chats} />
          </aside>
        </div>
      </div>
    </div>
  );
}
