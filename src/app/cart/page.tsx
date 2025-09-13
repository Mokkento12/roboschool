"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { removeItem, clearCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import styles from "./Cart.module.sass";

export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  if (!hydrated) {
    return <p>Загрузка корзины...</p>;
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>Ваша корзина пуста</h1>
        <p>Добавьте тренеров, чтобы записаться на занятия!</p>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Ваша корзина</h1>

      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className={styles.itemImage}
              unoptimized
            />
            <div className={styles.itemInfo}>
              <h3>{item.name}</h3>
              <p>{item.species}</p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className={styles.removeBtn}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      <div className={styles.cartActions}>
        <p>Всего тренеров: {cartItems.length}</p>
        <button onClick={handleClear} className={styles.clearBtn}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
}
