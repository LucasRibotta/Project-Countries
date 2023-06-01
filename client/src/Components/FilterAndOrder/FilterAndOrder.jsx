import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { filterByContinents, filterBySeason } from '../../Redux/actions/actions';
import FilterActivity from "./FilterActivity";
import FilterContinents from "./FilterContinents";
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from "./OrderPopulation";
import ClearFilter from "./ClearFilter";


export default function FilterAndOrder({setCurrentPage}){
  const dispatch = useDispatch();
  const [selectedContinent, setSelectedContinent] = useState(null);

  function handleFilterContinents(e) {
    const continent = e.target.value;
    setCurrentPage(1);
    setSelectedContinent(continent);
    dispatch(filterByContinents(continent));
  }

  const handleFilterSeason = (season) => {
    setCurrentPage(1);
  
    // Realizar el filtrado por temporada y continente
    dispatch(filterBySeason(season));
    if (selectedContinent) {
      dispatch(filterByContinents(selectedContinent));
    }
  };

  return (
    <div>
      <FilterContinents
        setCurrentPage={setCurrentPage}
        handleFilterContinents={handleFilterContinents}
      />
       <FilterActivity
        setCurrentPage={setCurrentPage}
        handleFilterSeason={handleFilterSeason}
      />
      <OrderNameAlpha setCurrentPage={setCurrentPage}/>
      <OrderPopulation setCurrentPage={setCurrentPage}/>
      <ClearFilter />
    </div>
  );
}
