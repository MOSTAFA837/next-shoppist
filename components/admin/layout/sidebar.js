import { useDispatch, useSelector } from "react-redux";
import styles from "./sidebar.module.scss";
import { toggleSidebar } from "@/store/expandSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  MdArrowForwardIos,
  MdCategory,
  MdNotificationsNone,
  MdSpaceDashboard,
} from "react-icons/md";
import { IoListCircle } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { AiFillMessage } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { FaThList } from "react-icons/fa";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { RiCoupon2Fill, RiSettingsLine } from "react-icons/ri";
import { BiLogOutCircle, BiMessageRounded } from "react-icons/bi";

export default function Sidebar() {
  const { data: session } = useSession();

  const router = useRouter();
  const route = router.pathname.split("/admin/dashboard/")[1];

  const dispatch = useDispatch();
  const { expandSidebar } = useSelector((state) => ({ ...state }));
  const expand = expandSidebar.expandSidebar;
  const handleExpand = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`${styles.sidebar} ${expand ? styles.opened : ""}`}>
      <div className={styles.sidebar__toggle} onClick={() => handleExpand()}>
        <div
          style={{
            transform: `${expand ? "rotate(180deg)" : ""}`,
            transition: "all .2s",
          }}
        >
          <MdArrowForwardIos />
        </div>
      </div>

      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__header}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.sidebar__user}>
          <img src={session?.user.image} alt="" />

          <div className={styles.show}>
            <span>Welcome back 👋 </span>
            <span>{session?.user.name}</span>
          </div>
        </div>

        <ul className={styles.sidebar__list}>
          <li className={route == undefined ? styles.active : ""}>
            <Link href="/admin/dashboard">
              <MdSpaceDashboard />
              <span className={styles.show}>Dashboard</span>
            </Link>
          </li>

          <li className={route == "sales" ? styles.active : ""}>
            <Link href="/admin/sales">
              <GiMoneyStack />
              <span className={styles.show}>Sales</span>
            </Link>
          </li>

          <li className={route == "orders" ? styles.active : ""}>
            <Link href="/admin/orders">
              <IoListCircle />
              <span className={styles.show}>Orders</span>
            </Link>
          </li>

          <li className={route == "users" ? styles.active : ""}>
            <Link href="/admin/users">
              <ImUsers />
              <span className={styles.show}>Users</span>
            </Link>
          </li>

          <li className={route == "messages" ? styles.active : ""}>
            <Link href="/admin/messages">
              <AiFillMessage />
              <span className={styles.show}>Messages</span>
            </Link>
          </li>
        </ul>

        <div className={styles.sidebar__dropdown}>
          <div className={styles.sidebar__dropdown_heading}>
            <div className={styles.show}>Product</div>
          </div>

          <ul className={styles.sidebar__list}>
            <li className={route == "product/all" ? styles.active : ""}>
              <Link href="/admin/product/all">
                <FaThList />
                <span className={styles.show}>All Products</span>
              </Link>
            </li>

            <li className={route == "product/create" ? styles.active : ""}>
              <Link href="/admin/product/all">
                <BsFillPlusSquareFill />
                <span className={styles.show}>Create Product</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.sidebar__dropdown}>
          <div className={styles.sidebar__dropdown_heading}>
            <div className={styles.show}>Categories / Subs</div>
          </div>

          <ul className={styles.sidebar__list}>
            <li className={route == "categories" ? styles.active : ""}>
              <Link href="/admin/categories">
                <MdCategory />
                <span className={styles.show}>Categories</span>
              </Link>
            </li>

            <li className={route == "subCategories" ? styles.active : ""}>
              <Link href="/admin/subCategories">
                <div style={{ transform: "rotate(180deg)" }}>
                  <MdCategory />
                </div>
                <span className={styles.show}>Sub-Categories</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.sidebar__dropdown}>
          <div className={styles.sidebar__dropdown_heading}>
            <div className={styles.show}>Categories / Subs</div>
          </div>

          <ul className={styles.sidebar__list}>
            <li className={route == "coupons" ? styles.active : ""}>
              <Link href="/admin/coupons">
                <div style={{ transform: "rotate(180deg)" }}>
                  <RiCoupon2Fill />
                </div>
                <span className={styles.show}>Coupons</span>
              </Link>
            </li>
          </ul>
        </div>

        <nav>
          <ul
            className={`${expand ? styles.nav_flex : ""} ${
              styles.sidebar__list
            }`}
          >
            <li>
              <Link href="">
                <RiSettingsLine />
              </Link>
            </li>
            <li>
              <Link href="">
                <MdNotificationsNone />
              </Link>
            </li>
            <li>
              <Link href="">
                <BiMessageRounded />
              </Link>
            </li>
            <li>
              <Link href="">
                <BiLogOutCircle />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
