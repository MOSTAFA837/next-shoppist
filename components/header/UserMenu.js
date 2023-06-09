import Link from "next/link";
import styles from "./styles.module.scss";
import { signOut } from "next-auth/react";

export default function UserMenu({ session }) {
  return (
    <div className={styles.menu}>
      {session ? (
        <>
          <div className={styles.flex}>
            {/* <img src={session.user.image} alt="" className={styles.menu__img} /> */}

            <div className={styles.col}>
              <span>Welcome Back,</span>
              <h3>{session.user.name}</h3>
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

            <li onClick={() => signOut()}>Sign out</li>
          </ul>
        </>
      ) : (
        <div className={styles.flex}>
          <Link className={styles.btn_primary} href="#">
            Register
          </Link>

          <Link href="/api/auth/signin" className={styles.btn_outlined}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
