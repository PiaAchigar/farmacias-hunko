import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Farmacias Hunko</title>
        <meta
          name="description"
          content="farmacia,perfumeria,electro belleza,medicamentos"
        />
        <link rel="icon" href="/img/CruzLogoHunko.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Proximamente Farmacias Hunko</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Liniers &rarr;</h2>
            <p>Farmacia Social Hunko - Carhue 99</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Caseros &rarr;</h2>
            <p>Farmacia Hunko - Av. Alvear 4787</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Contactos &rarr;</h2>
            <p>Telefono - mail - whatsapp</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Catalogo de Productos &rarr;</h2>
            <p>Maquillajes - Perfumes - Dermocosmética</p>
          </a>
        </div>
        <Button variant="contained" color="primary">
          Prueba
        </Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
