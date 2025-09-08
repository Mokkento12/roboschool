"use client";

import { useQuery, gql } from "@apollo/client";
import { spaceXClient } from "@/app/providers";
import styles from "./SpaceX.module.sass";

const GET_SPACEX_DATA = gql`
  query ExampleQuery {
    company {
      ceo
      name
      founded
      employees
    }
    roadster {
      name
      apoapsis_au
    }
  }
`;

interface SpaceXData {
  company: {
    ceo: string;
    name: string;
    founded: number;
    employees: number;
  };
  roadster: {
    name: string;
    apoapsis_au: number;
    description: string;
  };
}

export default function SpaceXPage() {
  const { loading, error, data } = useQuery(GET_SPACEX_DATA, {
    client: spaceXClient,
  });

  if (loading) return <p>Загрузка данных SpaceX...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  const spacexData: SpaceXData = data;

  return (
    <div className={styles.spacexPage}>
      <h1 className={styles.title}>SpaceX Information</h1>

      <div className={styles.companyInfo}>
        <h2>Компания {spacexData.company.name}</h2>
        <p>
          <strong>CEO:</strong> {spacexData.company.ceo}
        </p>
        <p>
          <strong>Основана:</strong> {spacexData.company.founded}
        </p>
        <p>
          <strong>Сотрудников:</strong> {spacexData.company.employees}
        </p>
      </div>

      <div className={styles.roadsterInfo}>
        <h2>{spacexData.roadster.name}</h2>
        <p>
          <strong>Апоцентр (AU):</strong> {spacexData.roadster.apoapsis_au}
        </p>
      </div>
    </div>
  );
}
