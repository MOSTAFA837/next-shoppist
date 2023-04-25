import styles from "./styles.module.scss";
import GridLoader from "react-spinners/GridLoader";

export default function DotLoaderSpinner({ loading }) {
  return (
    <div className={styles.loader}>
      <GridLoader color="#3f51b5" loading={loading} />
    </div>
  );
}
