import React, { useEffect } from "react";

interface Project {
  id: string;
  attributes: {
    slug: string;
    title: string;
    filter: string;
    category: string;
    size: string;
    showcaseImage: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    coverImage: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
}

// On définit les types pour les props du composant Filter
interface Props {
  setActiveFilter: (filter: string) => void;
  activeFilter: string; 
  setFiltered: (projects: Project[]) => void; 
  portfolio: Project[];
  lang: string;
}

// Composant Filter + props
const Filter: React.FC<Props> = ({ setActiveFilter, activeFilter, setFiltered, portfolio, lang }) => {
  useEffect(() => {
    
    // Si activeFilter est égal à "*", alors tous les projets du portfolio sont passés à la fonction setFiltered.
    if (activeFilter === "*") {
      setFiltered(portfolio);
      return;
    }
    // Sinon, un filtre est appliqué sur le portfolio en fonction de la valeur de activeFilter. 
    // Les projets dont la propriété filter correspond à activeFilter sont extraits et passés à la fonction setFiltered.
    const filtered = portfolio?.filter((project) => project.attributes.filter.includes(activeFilter));
    setFiltered(filtered || []);
  }, [activeFilter, portfolio, setFiltered]);

  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-start md:justify-end pt-16 md:pt-32 filtering">
      <span onClick={() => setActiveFilter("*")} data-filter="*" className={activeFilter === "*" || activeFilter === "" ? "text-[#17515c] dark:text-[#c0ccbb] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0" : "text-[#555555] dark:text-[#E7E6E2] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0"}>
        {lang === "en" ? "All" : "Tout"}
      </span>
      <span onClick={() => setActiveFilter("web")} data-filter="web" className={activeFilter === "web" ? "text-[#17515c] dark:text-[#c0ccbb] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0" : "text-[#555555] dark:text-[#E7E6E2] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0"}>
      {lang === "en" ? "Web Development" : "Développement Web"}
      </span>
      <span onClick={() => setActiveFilter("design")} data-filter="design" className={activeFilter === "design" ? "text-[#17515c] dark:text-[#c0ccbb] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0" : "text-[#555555] dark:text-[#E7E6E2] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0"}>
      {lang === "en" ? "Creative Design" : "Création Graphique"}
      </span>
      <span onClick={() => setActiveFilter("craft")} data-filter="craft" className={activeFilter === "craft" ? "text-[#17515c] dark:text-[#c0ccbb] after:bg-[#17515c] dark:after:bg-[#c0ccbb] " : "text-[#555555] dark:text-[#E7E6E2] after:bg-[#17515c] dark:after:bg-[#c0ccbb] "}>
      {lang === "en" ? "Craft" : "Artisanat"}
      </span>
    </div>
  );
};

export default Filter;
