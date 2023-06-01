import React from "react";

import FilterActivity from "./FilterActivity";
import FilterContinents from "./FilterContinents";
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from "./OrderPopulation";

export default function FilterAndOrder({ setCurrentPage }) {



  return (
    <div>
      <FilterContinents
        setCurrentPage={setCurrentPage}
      />
      <FilterActivity
        setCurrentPage={setCurrentPage}
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