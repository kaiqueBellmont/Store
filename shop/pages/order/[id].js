import styles from '../../styles/order.module.scss'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Order from '@/models/Order'

export default function order() {
  return (
    <>
    <Header country="country"/>
    <Footer country="country"/>

    </>
  )
}

export async function getserverSideProps(context) {
  const {query} = context;
  const id = query.id;
  const order = await Order.findById(id).populate("user").lean();

  return {

    props: {
      order: JSON.parse(JSON.stringify(order))
    }
  }
}
