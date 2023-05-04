import Menu from "./Menu";
import User from "./User";
import MainSwiper from "./swiper";
import styles from "./styles.module.scss";
import Header from "./Header";

export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
      <MainSwiper />
      {/* <Offers /> */}
      <User />
    </div>
  );
}
