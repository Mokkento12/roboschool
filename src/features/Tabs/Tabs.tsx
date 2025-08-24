"use client";

import { useState } from "react";
import { education } from "@/data/education";
import styles from "./Tabs.module.sass";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Образование" },
    { id: "experience", label: "Опыт работы" },
    { id: "awards", label: "Награды" },
  ];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {/* Образование */}
        {activeTab === "education" && (
          <div className={styles.content}>
            {education.map((item) => (
              <div key={item.id} className={styles.educationItem}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.period}>{item.period}</p>
                {item.faculty && (
                  <p className={styles.faculty}>{item.faculty}</p>
                )}
                {item.specialty && (
                  <p className={styles.specialty}>{item.specialty}</p>
                )}
                {item.form && <p className={styles.form}>{item.form}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Опыт работы */}
        {activeTab === "experience" && (
          <div className={styles.content}>
            <p>Опыт работы будет здесь</p>
          </div>
        )}

        {/* Награды */}
        {activeTab === "awards" && (
          <div className={styles.content}>
            <p>Награды будут здесь</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
