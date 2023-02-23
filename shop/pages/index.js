import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Category from '@/components/home/category'
import Main from '../components/home/main'
import axios from 'axios'
import { useSession, signIn, signOut } from "next-auth/react"
import FlashDeals from '../components/home/flashdeals'

import { useMediaQuery } from 'react-responsive'


import {
  women_accessories,
  women_dresses,
  women_shoes,
} from "../data/home";

export default function Home({ country }) {
  const { data: session } = useSession()
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });
  return <div>
    <Header country={country} />
    <div className={styles.home}>
      <div className={styles.container}>
        <Main />
        <FlashDeals />
        <div className={styles.home__category}>
          <Category
            header="Dresses"
            products={women_dresses}
            background="#5a31f4"
          />
          {!isMedium && (
            <Category
              header="Shoes"
              products={women_shoes}
              background="#3c811f"
            />
          )}
          {isMobile && (
            <Category
              header="Shoes"
              products={women_shoes}
              background="#3c811f"
            />
          )}
          <Category
            header="Accessories"
            products={women_accessories}
            background="#000"
          />
        </div>
      </div>
    </div>
    <Footer country={country} />
  </div>
}

export async function getServerSideProps() {
  let data = await axios.get('https://api.ipregistry.co/?key=3fh49z69rso1p2ju').then((res) => {
    return res.data.location.country;
  })
    .catch((err) => {
      console.log(err);
    })
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  }
}