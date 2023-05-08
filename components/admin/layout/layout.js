import { useSelector } from "react-redux";
import styles from "./layout.module.scss";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  const { expandSidebar } = useSelector((state) => ({ ...state }));
  const expand = expandSidebar.expandSidebar;

  return (
    <div className={styles.layout}>
      <Sidebar />

      <div
        className={styles.layout__main}
        style={{ marginLeft: `${expand ? "280px" : "80px"}` }}
      >
        {children}
      </div>
    </div>
  );
}
