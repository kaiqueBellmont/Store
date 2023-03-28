import styles from "./styles.module.scss";
// import { useState, useEffect } from "react";
// import { compareArrays } from "../../../utils/arrays_utils";
export default function CartHeader({ cartItems, selected, setSelected }) {
//   const [active, setActive] = useState();
//   useEffect(() => {
//     const check = compareArrays(cartItems, selected);
//     setActive(check);
//   }, [selected]);
//   const handleSelect = () => {
//     if (selected.length !== cartItems.length) {
//       setSelected(cartItems);
//     } else {
//       setSelected([]);
//     }
//   };

  return (
    <div className={`${styles.cart__header} ${styles.card}`}>
      <h1>Item Summary</h1>
      <div className={styles.flex}>
        <div className={`${styles.checkbox}`}></div>
        <span>Select all items</span>
      </div>
    </div>
  );
}