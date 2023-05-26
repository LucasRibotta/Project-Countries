import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityCreated, countryByActivitys } from '../../redux/actions/actions';

export default function FilterActivity({ setCurrentPage }) {
  const dispatch = useDispatch();
  const activitisCountry = useSelector((state)=> state.countries)

  return (
    <div>
      
    </div>
  );
}