import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from '../../redux/actions/actions'
import { validate } from './validate'
import style from './style/Create.module.css'
import swal from 'sweetalert';
import { useHistory } from 'react-router'; // Importa useHistory desde react-router

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory(); // Utiliza useHistory desde react-router
  const countries = useSelector((state) => state.countries);

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
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
        if (e.target.checked) {
          if (form.season.length < 2) {
            setForm({
              ...form,
              season: [...form.season, e.target.value],
            });
          }
        } else {
          setForm({
            ...form,
            season: form.season.filter((s) => s !== e.target.value),
          });
        }
        setErrors(validate({
          ...form,
          season: e.target.checked ? [...form.season, e.target.value] : form.season,
        }));
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
      
        if (Object.keys(errors).length === 0) {
          swal({
            title: "Do you want to create the activity?",
            text: "This step cannot be modified...",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true,
          }).then((isConfirm) => {
            if (isConfirm) {
              swal({
                title: "¡Successful!",
                text: "Now you can enjoy your activity",
                icon: "success",
              }).then(() => {
                console.log(form);
                dispatch(createActivity(form));
                setForm({
                  name: "",
                  difficulty: "",
                  duration: "",
                  season: "",
                  countries: []
                });
                history.push("/home");
              });
            } else {
              swal({
                title: "¡No!",
                text: "Proceed to make the changes",
                icon: "error"
              });
            }
          });
        } else {
          swal("Please fill in all the required fields.");
        }
      }



    return (

        <div>
            <Link to= '/home'> <button>Back</button> </Link>
            <div>
            <h1>Create tourist activity</h1>
            <form onSubmit={(e) => handleSubmit(e)} >

              <div className={style.conteiner}>
                <div className={style.title}>
                    <label>Activity Name:</label>
                    <input 
                    placeholder="Name..."
                    type="text" 
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    />
                    {errors.name && (
                        <p className={style.error} >{errors.name}</p>
                    )}
                </div>
                  
                <div>
                    <label>Difficulty:</label>
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
                    {errors.season && (
                        <p className={style.error} >{errors.season}</p>
                    )}
                </div>


                <div className={style.countriesContainer}>
                <select onChange={(e)=> handleSelect(e)}>
                <option value="">Select Countries</option>
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

