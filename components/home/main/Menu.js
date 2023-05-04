import styles from "./styles.module.scss";
import { BiCategory } from "react-icons/bi";
import { GiClothes, GiHeadphones, GiLargeDress } from "react-icons/gi";
import { menuArray } from "@/data/home";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li className={styles.menu__cat}>
          <a href="" className={styles.menu__header}>
            <BiCategory />
            <b>Categories</b>
          </a>
        </li>

        <div className={styles.menu__list}>
          {menuArray.map((item, i) => (
            <li>
              <Link href={item.link}>
                {i == 0 ? (
                  <GiLargeDress />
                ) : i == 1 ? (
                  <GiClothes />
                ) : i == 2 ? (
                  <GiHeadphones />
                ) : (
                  ""
                )}

                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
