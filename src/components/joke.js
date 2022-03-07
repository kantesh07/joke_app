// @flow strict

import * as React  from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Categories from './categories';



const Joke = () => {

    const param = useParams();

    const [joke, setJoke] = useState("");
    const [selectedCat, setSelectedCat] = useState("");
   

     React.useEffect(() => {


        if(param.type.length!==0){
            axios.get(`https://api.chucknorris.io/jokes/random?category=${param.type}`)
            .then(response => {
            console.log(response);
            setJoke(response.data.value);
            setSelectedCat(response.data.categories);
            });
        }

       
        
       console.log(param);
      }, []);

    const navigate = useNavigate();

    // const [category, setCategory] = useState("");
    // const [joke , setJoke] = useState("");
    // const [flag, setFlag] = useState(true);

    const handleClick = () => {

        // console.log(`${Category} is pressed`)
        // fetchJokes(category);
        // history.push("/joke");

        navigate('/');

    }
    return (
        <div>
            <div style={{textAlign:"center"}}>Selected Category : {selectedCat}</div>
            <div style={{backgroundColor:"skyblue", textAlign:"center", color:"white", margin:"25px", fontSize:"40px"}}>
                {joke}
            </div>
           <div style={{textAlign:"center"}}>
           <button style={{backgroundColor:"white", border:"none", borderRadius:"5px", padding:"15px"  }} onClick={handleClick}>
                NEW JOKE
            </button>
           </div>
        </div>
    );
};

export default Joke;