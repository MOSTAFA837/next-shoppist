import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "@/components/home/main";
import FlashDeals from "@/components/home/flashDeals";
import Category from "@/components/home/category";
import { men } from "@/data/home";
import { useMediaQuery } from "react-responsive";
import ProductsSwiper from "@/components/productsSwiper";

export default function Home() {
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });

  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />

          <FlashDeals />

          <div className={styles.home__category}>
            <Category header="Men" products={men} background="#5a31f4" />
            {!isMedium && (
              <Category header="Men" products={men} background="#5a31f4" />
            )}
            <Category header="Men" products={men} background="#5a31f4" />
          </div>

          <ProductsSwiper products={men} header="Women" />
          <ProductsSwiper products={men} bg="#2f82ff" header="For Gamers" />
          <ProductsSwiper products={men} bg="#5a31f4" header="Accessories" />
        </div>
      </div>
      <Footer />
    </>
  );
}
