// components/Filter.js

import React, { useEffect } from 'react';

const Filtertest = ({ setActiveFilter, activeFilter, setFiltered, projects }) => {
  useEffect(() => {
    if (activeFilter === '*') {
      setFiltered(projects);
      return;
    }
    const filtered = projects?.filter((project) =>
      project.attributes.filter.includes(activeFilter));
    setFiltered(filtered);
    console.log(filtered)
    
  }, [activeFilter]);

  return (
    <div className="row pt-32 justify-end filtering">
      <span onClick={() => setActiveFilter('*') } data-filter="*" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
      All
    </span>
    <span onClick={() => setActiveFilter('web') } data-filter="web" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
      Web Development
    </span>
    <span  onClick={() => setActiveFilter('design') } data-filter="design" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
      Creative Design
    </span>
    <span onClick={() => setActiveFilter('craft') } data-filter="craft" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
      Craft
    </span>
  </div>
  );
};

export default Filtertest;
