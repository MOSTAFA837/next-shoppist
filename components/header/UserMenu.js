import Link from "next/link";
import styles from "./styles.module.scss";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={styles.menu}>
      {loggedIn ? (
        <>
          <div className={styles.flex}>
            <img
              src="data:image/png;base64,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"
              alt=""
              className={styles.menu__img}
            />

            <div className={styles.col}>
              <span>Welcome Back,</span>
              <h3>Mostafa</h3>
              <span onClick={() => signOut()}>Sign out</span>
            </div>
          </div>

          <ul>
            <li>
              <Link href="/profile">Account</Link>
            </li>

            <li>
              <Link href="/profile/orders">My Orders</Link>
            </li>

            <li>
              <Link href="/profile/messages">Message Center</Link>
            </li>

            <li>
              <Link href="/profile/address">Address</Link>
            </li>

            <li>
              <Link href="/profile/whishlist">Whishlist</Link>
            </li>
          </ul>
        </>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
    </div>
  );
}