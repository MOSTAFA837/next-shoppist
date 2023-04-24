import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";

import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>

        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <span>Egypt</span>
          </li>

          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>

          <li className={styles.li}>
            <span>Customer Service</span>
          </li>

          <li className={styles.li}>
            <span>Help</span>
          </li>

          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>Whishlist</span>
            </Link>
          </li>

          <li
            className={styles.li}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {loggedIn ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Mostafa</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}

            {visible && <UserMenu loggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
