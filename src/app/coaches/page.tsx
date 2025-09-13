"use client";

import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { addItem } from "@/store/slices/cartSlice";
import styles from "./Coaches.module.sass";
import { useCallback } from "react";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1) {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
}

export default function CoachesPage() {
  // ✅ 1. Сначала — Apollo (useQuery)
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  // ✅ 2. Потом — Redux (useDispatch, useSelector)
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // ✅ 3. Потом — useCallback (если нужно)
  const handleAddToCart = useCallback(
    (char: Character) => {
      dispatch(
        addItem({
          id: char.id,
          name: char.name,
          image: char.image,
          species: char.species,
        })
      );
    },
    [dispatch]
  );

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки: {error.message}</p>;

  const characters: Character[] = data?.characters?.results || [];

  return (
    <div className={styles.coachPage}>
      <h1 className={styles.title}>Наши тренеры</h1>
      <div className={styles.trainerGrid}>
        {characters.map((char) => (
          <div key={char.id} className={styles.trainerCard}>
            <Link href={`/coaches/${char.id}`} className={styles.imageLink}>
              <Image
                src={char.image}
                alt={char.name}
                width={250}
                height={300}
                className={styles.trainerImage}
                unoptimized
                priority={false} // ← если не LCP — false. Если первая карточка — true для неё
              />
            </Link>
            <h2 className={styles.trainerName}>{char.name}</h2>
            <p className={styles.trainerRole}>{char.species}</p>
            <button
              onClick={() => handleAddToCart(char)}
              className={styles.addToCartBtn}
              aria-label={`Добавить ${char.name} в корзину`}
            >
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
