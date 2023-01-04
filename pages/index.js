import Head from "next/head";
import Link from "next/Link";
import Image from "next/image";
import Nabvar from "../components/Navbar";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import navbarStyles from "../styles/Navbar.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className={styles.homePage}>This is the home 
  page</div>;
}
