import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";
import { BiCartAlt } from "react-icons/bi";
import styles from "./styles.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" className={styles.logo}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwzn5nQKm9l4lRY5FrGztQf5EcdBB7HRK3g&usqp=CAU"
            alt=""
          />
        </Link>

        <div className={styles.search}>
          <input type="text" placeholder="Search..." className={styles.input} />

          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>

        <Link href="/cart" className={styles.cart}>
          <BiCartAlt />
          <span>3</span>
        </Link>
      </div>
    </div>
  );
}
