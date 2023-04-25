import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

import styles from "./styles.module.scss";

export default function Copyright() {
  return (
    <div className={styles.footer__copyright}>
      <section>©2022 Shoppist All Rights Reserved.</section>

      <section>
        <ul>
          {data.map((item) => (
            <li>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}

          <li>
            <a href="/">
              <CiLocationOn />
              Egypt
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

const data = [
  {
    name: "Pricay Center",
    link: "",
  },
  {
    name: "Pricay & Cookie Pplicy",
    link: "",
  },
  {
    name: "Manage Cookie",
    link: "",
  },
];
