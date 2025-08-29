"use client";

import { useState } from "react";
import PackageCard from "../PackageCard/PackageCard";
import { packages } from "@/data/packages";
import styles from "./Packages.module.sass";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <div className={styles.packages}>
      <div className={styles.container}>
        <h2 className={styles.title}>Выберите нужный пакет</h2>
        <div className={styles.cards}>
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isSelected={selectedPackage === pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
