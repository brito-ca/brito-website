import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Website BRITO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Header />
        <Banner title="Our mission" />
        <Banner title="Our Vision" />
        <div className={styles.title}>Home</div>
        <Link href="/typography-demo">Typography Demo</Link>
      </main>
    </>
  );
}
