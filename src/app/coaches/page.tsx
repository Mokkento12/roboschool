"use client";

import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import styles from "./Coaches.module.sass";
import Header from "@/components/Header/Header";

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
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  const characters: Character[] = data.characters.results;

  return (
    <div className={styles.coachPage}>
      <h1 className={styles.title}>Наши тренеры</h1>
      <div className={styles.trainerGrid}>
        {characters.map((char) => (
          <div key={char.id} className={styles.trainerCard}>
            <Image
              src={char.image}
              alt={char.name}
              width={250}
              height={300}
              className={styles.trainerImage}
              unoptimized
            />
            <h2 className={styles.trainerName}>{char.name}</h2>
            <p className={styles.trainerRole}>{char.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
