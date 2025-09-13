import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./CoachDetail.module.sass";

// Получаем данные на сервере
export async function generateMetadata({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json();

  if (!character.name) {
    notFound();
  }

  return {
    title: `Тренер ${character.name} | Roboschool`,
    description: `Профиль тренера ${character.name} — ${character.species}`,
  };
}

// Генерируем статические пути (для SSG)
export async function generateStaticParams() {
  // Получаем первых 20 персонажей для предварительной генерации
  const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  const data = await res.json();

  return data.results.map((char: any) => ({
    id: char.id.toString(), // ID должен быть строкой
  }));
}

// Компонент страницы
export default async function CoachDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json();

  if (!character.name) {
    notFound();
  }

  return (
    <div className={styles.coachDetail}>
      <div className={styles.header}>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className={styles.avatar}
          unoptimized
        />
        <div className={styles.info}>
          <h1 className={styles.name}>{character.name}</h1>
          <p className={styles.status}>
            <strong>Статус:</strong> {character.status}
          </p>
          <p className={styles.species}>
            <strong>Вид:</strong> {character.species}
          </p>
          <p className={styles.origin}>
            <strong>Родина:</strong> {character.origin.name}
          </p>
        </div>
      </div>

      <div className={styles.episodes}>
        <h2>Эпизоды участия</h2>
        <ul>
          {character.episode.map((url: string, index: number) => (
            <li key={index}>Эпизод {url.split("/").pop()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
