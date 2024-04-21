import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import pandolImg from "/public/panadol.webp";
import styles from "../styles/Home.module.css";
import { Container, Grid } from "@mui/material";
import Link from "next/link";

const Home: NextPage = () => {
  const products = [
    { slug: 'panadol-500mg-tablets', name: 'Panadol 500Mg Tablets' },
  ];
  
  return (
    <>
      <Head>
        <title>Dvago || Product List</title>
        <meta name="description" content="Dvago Pk Online Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="lg">
          <div className={styles.container}>
            <h1>Product List page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              commodi accusantium porro dolor.
            </p>
           
            {/* grid flex start*/}
            <Grid container spacing={2} columns={12}>
              {products.map((product) => (
                <Grid key={product.slug} item xs={12} sm={6} md={4} lg={3}>
                  <div className={styles.pruduct_holder}>
                    <div className={styles.prdtimg__holder}>
                      <Image
                        priority={false}
                        src={pandolImg}
                        height={200}
                        width={200}
                        alt="Pandol Image"
                      />
                    </div>
                    <div className={styles.product_price}>
                      <Link href={`/${product.slug}`} as={`/${product.slug}`}>{product.name}</Link>
                      <h3>Rs. 32.03 <span>RS. 50.00</span></h3>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
            {/* grid flex end--*/}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
