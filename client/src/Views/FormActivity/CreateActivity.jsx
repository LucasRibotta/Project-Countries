import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from '../../Redux/actions/actions'
import { validate } from './validate'
import style from './style/Create.module.css'
import './style/modal.css'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function CreateActivity() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries);

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        names: "",
        difficulty: "",
        duration: "",
        season: [],
        countries: [],
    })


    useEffect(()=> {
        dispatch(getCountries())
    }, [dispatch])


    function handleChange(e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        setErrors(validate({
          ...form,
          [e.target.name]: e.target.value,
        }));
      }


      function handleCheck(e) {
        const selectedSeason = e.target.value;
      
        if (selectedSeason === 'All') {
          if (e.target.checked) {
            setForm((prevForm) => ({
              ...prevForm,
              season: ['Summer', 'Autumn', 'Winter', 'Spring'],
            }));
          } else {
            setForm((prevForm) => ({
              ...prevForm,
              season: [],
            }));
          }
        } else {
          if (e.target.checked) {
            setForm((prevForm) => ({
              ...prevForm,
              season: [...prevForm.season, selectedSeason],
            }));
            setErrors((prevErrors) => {
              const updatedErrors = { ...prevErrors };
              delete updatedErrors.season;
              return updatedErrors;
            });
          } else {
            setForm((prevForm) => ({
              ...prevForm,
              season: prevForm.season.filter((season) => season !== selectedSeason),
            }));
            setErrors(validate({ ...form, season: form.season }));
          }
        }
      }
      
      

    function handleSelect(e){
        setForm({
            ...form,
            countries: [...form.countries, e.target.value]
        })
        setErrors(validate ({
            ...form, 
            [e.target.name]: e.target.value
        }))
    }

    function handleDelete(e){
        setForm({
            ...form,
            countries: form.countries.filter(coun => coun !== e)
        })
    }

    function handleSubmit(e) {
      e.preventDefault();
      const formErrors = validate(form);
      if (Object.keys(errors).length === 0 && Object.keys(formErrors).length === 0) {
        if (Object.values(form).every((value) => value !== "")) {
          swal({
            title: "Do you want to create the activity? This step cannot be modified...",
            text: "¡Successful! Now you can enjoy your activity",
            icon: "warning",
            buttons: ["Cancel", "Create"],
            dangerMode: true,
            className: 'custom-modal'
          }).then((createConfirmed) => {
            if (createConfirmed) {
              const formData = {
                ...form,
                season: form.season
              };
              dispatch(createActivity(formData));
              setForm({
                names: "",
                difficulty: "",
                duration: "",
                season: [],
                countries: []
              });
              navigate("/home");
    
              swal("Activity Created!", "You can now enjoy your activity", "success");
            } else {
              swal("Proceed to make the changes");
            }
          });
        } else {
          swal("Please fill in all the required fields.", "", "error");
        }
      } else {
        setErrors(formErrors);
        swal("Please fix the validation errors.", "", "error");
      }
    }



    return (

        <div>
            <div>
            <h1 className={style.titleH1}>Create tourist activity</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
              
              <div className={style.conteiner}>
                <div className={style.title}>
                    <label>Activity Name:</label>
                    <input 
                    placeholder="Name..."
                    type="text" 
                    value={form.names}
                    name="names"
                    onChange={handleChange}
                    />
                    {errors.names && (
                        <p className={style.error} >{errors.names}</p>
                    )}
                </div>
                  
                <div>
                    <label>Difficulty: </label>
                    <select 
                    type="number" 
                    value={form.difficulty}
                    name="difficulty"
                    onChange={handleChange} 
                    >
                        <option value="">Select Difficulty</option>
                        <option value="1">Very Easy</option>
                        <option value="2">Easy</option>
                        <option value="3">Normal</option>
                        <option value="4">Difficult</option>
                        <option value="5">Extreme</option>
                    </select>
                    {errors.difficulty && (
                        <p className={style.error} >{errors.difficulty}</p>
                    )}
                </div>

                <div>
                    <label>Duration: </label>
                    <input 
                    placeholder="Duration..."
                    type="number" 
                    value={form.duration}
                    name="duration"
                    onChange={handleChange}
                    
                    />
                    {errors.duration && (
                    <p className={style.error} >{errors.duration}</p>
                    )}
                    <span>Hs</span>
                </div>

                <div className={style.seasonContainer}>
                    <label>Season:</label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="All"
                        value="All"
                        onChange={handleCheck}/>All
                    </label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="Summer"
                        value="Summer"
                        onChange={handleCheck}/>Summer
                    </label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="Autumn"
                        value="Autumn"
                        onChange={handleCheck}/>Autumn
                    </label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="Winter"
                        value="Winter"
                        onChange={handleCheck}/>Winter
                    </label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="Spring"
                        value="Spring"
                        onChange={handleCheck}/>Spring
                    </label>
                    {errors.season && errors.season.length > 1 && (
                      <p className={style.error} >{errors.season}</p>
                    )}
                </div>


                <div className={style.countriesContainer}>
                <select onChange={(e)=> handleSelect(e)}>
                <option className={style.selectCountries} value="">Select Countries</option>
                    {countries.map((cou) => 
                    <option value={cou.name} key={cou.name} > {cou.name}</option>
                    )}
                </select>
                <div>
                <ul className={style.selectedList}>
                    <li>{form.countries.map((el, index)=> 
                        <div key={index}>
                            {el}
                        <button className={style.selectedCountry} onClick={() => handleDelete(el)}>X</button>
                        </div>)}</li>
                    </ul>
                   
                        {errors.countries && (
                        <p className={style.error} >{errors.countries}</p>
                    )}

                </div>


                </div>
            </div>
              <div className={style.conteinerButton}>
              <button className={style.createButton } type="submit">
                <span>Create New Activity</span>
              </button>
              </div>
             
            </form>

            </div>

        </div>
    )
    

}

