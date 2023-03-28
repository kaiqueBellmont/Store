import Header from "components/cart/header"
import styles from "../styles/cart.module.scss"
import { useSelector, useDispatch } from "react-redux";
import Empty from "@/components/cart/empty";
import Product from "@/components/cart/product";
import CartHeader from "@/components/cart/cartHeader";
import Checkout from "@/components/cart/checkout";
import { updateCart } from "@/store/cartSlice";
import { useEffect, useState } from "react";

export default function cart() {
  const [selected, setSelected] = useState([]);
  const { cart } = useSelector((state) => ({ ...state }))
  const dispatch = useDispatch();

  useEffect(() => {

  }, [])
  return (
    <>
      <Header />
      <div className={styles.cart}>
        {cart.cartItems.length > 0 ? (
          <div className={styles.cart__container}>
            <CartHeader
              cartItems={cart.cartItems}
              selected={selected}
              setSelected={setSelected}
            />
            <div className={styles.cart__products}>
              {cart.cartItems.map((product) => (
                <Product
                  product={product}
                  key={product._uid}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
            <Checkout
              subtotal="5458"
              shippingFee={0}
              selected={[]}
              total="5458"
            />
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </>
  )
}
