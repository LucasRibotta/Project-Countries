import React, { useState } from "react";
import FilterActivity from "./FilterActivity";
import FilterContinents from "./FilterContinents";
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from "./OrderPopulation";

export default function FilterAndOrder({ setCurrentPage }) {

  const [selectedContinent, setSelectedContinent] = useState("");
  const [ , setSelectedSeason] = useState("");

  const handleFilterContinents = (continent) => {
    setSelectedContinent(continent);
  };

  const handleFilterSeason = (season) => {
    setSelectedSeason(season);
  };

  return (
    <div>
      <FilterContinents
        setCurrentPage={setCurrentPage}
        handleFilterContinents={handleFilterContinents}
      />
      <FilterActivity
        setCurrentPage={setCurrentPage}
        selectedContinent={selectedContinent}
        handleFilterSeason={handleFilterSeason}
      />
      <OrderNameAlpha
        setCurrentPage={setCurrentPage}
      />
      <OrderPopulation
        setCurrentPage={setCurrentPage}

      />

    </div>
  );
}