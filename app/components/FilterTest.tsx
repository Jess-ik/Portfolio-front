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
  };
}

interface Props {
  setActiveFilter: (filter: string) => void;
  activeFilter: string; // Change to string type
  setFiltered: (projects: Project[]) => void; // Change to Project[] type
  portfolio: Project[];
}

const Filtertest: React.FC<Props> = ({ setActiveFilter, activeFilter, setFiltered, portfolio }) => {
  useEffect(() => {
    if (activeFilter === "*") {
      setFiltered(portfolio);
      return;
    }
    const filtered = portfolio?.filter((project) => project.attributes.filter.includes(activeFilter));
    setFiltered(filtered || []);
  }, [activeFilter, portfolio, setFiltered]);

  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-start md:justify-end pt-16 md:pt-32 filtering">
      <span onClick={() => setActiveFilter("*")} data-filter="*" className={activeFilter === "*" || activeFilter === "" ? "text-[#17515c] dark:text-[#c0ccbb] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0" : "text-[#555555] dark:text-[#E7E6E2] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0"}>
        All
      </span>
      <span onClick={() => setActiveFilter("web")} data-filter="web" className={activeFilter === "web" ? "text-[#17515c] dark:text-[#c0ccbb] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0" : "text-[#555555] dark:text-[#E7E6E2] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0"}>
        Web Development
      </span>
      <span onClick={() => setActiveFilter("design")} data-filter="design" className={activeFilter === "design" ? "text-[#17515c] dark:text-[#c0ccbb] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0" : "text-[#555555] dark:text-[#E7E6E2] after:bg-[#17515c] dark:after:bg-[#c0ccbb] pb-6 md:pb-0"}>
        Creative Design
      </span>
      <span onClick={() => setActiveFilter("craft")} data-filter="craft" className={activeFilter === "craft" ? "text-[#17515c] dark:text-[#c0ccbb] after:bg-[#17515c] dark:after:bg-[#c0ccbb] " : "text-[#555555] dark:text-[#E7E6E2] after:bg-[#17515c] dark:after:bg-[#c0ccbb] "}>
        Craft
      </span>
    </div>
  );
};

export default Filtertest;
