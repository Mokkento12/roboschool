"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react/hooks";
import Image from "next/image";

import styles from "./Coaches.module.sass";

const GET_TRAINERS = gql`
  query GetTrainers {
    trainers {
      id
      name
      role
      image
    }
  }
`;

interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
}

export default function CoachesPage() {
  const { loading, error, data } = useQuery(GET_TRAINERS);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки тренеров</p>;

  const trainers: Trainer[] = data.trainers;

  return (
    <div className={styles.coachPage}>
      <h1 className={styles.title}>Наши тренеры</h1>
      <div className={styles.trainerGrid}>
        {trainers.map((trainer) => (
          <div key={trainer.id} className={styles.trainerCard}>
            <Image
              src={trainer.image}
              alt={trainer.name}
              width={360}
              height={500}
              className={styles.trainerImage}
              unoptimized
            />
            <h2 className={styles.trainerName}>{trainer.name}</h2>
            <p className={styles.trainerRole}>{trainer.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
