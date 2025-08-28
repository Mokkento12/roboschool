"use client";

import { useState } from "react";
import { educationData } from "@/data/educationData";
import styles from "./Tabs.module.sass";
import type { EducationItem } from "@/types";

type TabsProps = {
  trainerId: string;
};

const Tabs: React.FC<TabsProps> = ({ trainerId }) => {
  const [activeTab, setActiveTab] = useState("education");

  console.log("trainerId:", trainerId);

  const currentEducation: EducationItem[] = educationData[trainerId] || [];

  console.log("currentEducation:", currentEducation);

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
      <div className={styles.scrollArea}>
        <div className={styles.tabContent}>
          {activeTab === "education" && (
            <div className={styles.content}>
              {currentEducation.map((item) => (
                <div key={item.id} className={styles.educationItem}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.period}>{item.period}</p>
                  {item.faculty && <p>{item.faculty}</p>}
                  {item.specialty && <p>{item.specialty}</p>}
                  {item.form && <p>{item.form}</p>}
                </div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className={styles.content}>
              <p>Опыт работы будет здесь</p>
            </div>
          )}

          {activeTab === "awards" && (
            <div className={styles.content}>
              <p>Награды будут здесь</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
