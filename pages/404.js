import Head from "next/head";
import styles from "../styles/404.module.css";

const pageNotFound = () => {
  return (
    <div className={styles.page}>
        <Head>
            <title>Page not found</title>
        </Head>
      <div className={styles.handSign}>🤏</div>
    </div>
  );
};

export default pageNotFound;
