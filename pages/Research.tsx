import React, { useState, useMemo } from "react";
import ResearchItem from "../components/ResearchItem";
import { researchPapers } from "../data/research";
import type { ResearchPaper } from "../types";

type Category = "すべて" | "ジャーナル" | "国際会議" | "ワークショップ";

const Research: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("すべて");
  const categories: Category[] = [
    "すべて",
    "ジャーナル",
    "国際会議",
    "ワークショップ",
  ];

  const filteredPapers = useMemo(() => {
    if (activeCategory === "すべて") {
      return researchPapers;
    }
    const categoryMap = {
      ジャーナル: "Journal",
      国際会議: "Conference",
      ワークショップ: "Workshop",
    };
    return researchPapers.filter(
      (paper) =>
        paper.category ===
        categoryMap[activeCategory as keyof typeof categoryMap]
    );
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-neutral-dark">研究</h1>
          <p className="mt-2 text-lg text-neutral-medium">
            学術コミュニティへの私の貢献です。
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-neutral p-1 rounded flex space-x-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-white text-primary shadow-sm"
                    : "text-neutral-medium hover:bg-white/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper: ResearchPaper) => (
              <ResearchItem key={paper.id} paper={paper} />
            ))
          ) : (
            <p className="text-center text-neutral-medium">
              このカテゴリの論文はありません。
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;
