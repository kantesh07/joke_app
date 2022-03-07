// @flow strict

import * as React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Categories from './categories';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { color } from '@mui/system';




const Home = () => {

    const navigate = useNavigate();

    


    
   

    // useEffect(() => {
    //     if(category.length!==0){
    //         axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    //         .then(response => {
    //         console.log(response);
    //         setJoke(response.data.value);
    //         });
    //     }
       
    //   }, [category, flag]);

    // const fetchJokes = async() => {
    //     const {data} = await axios.get(
    //         'https://api.chucknorris.io/jokes/random'
    //     )

    //     console.log(data);
    // }


    return (
        <div>
            <h2>Chuck Norries</h2>

            <div style={{backgroundColor:"lightgray"}} >
            {
                // Categories.map((cat) => {
                //     // <Grid item xs={2} sm={4} md={4}> 
                //     // <item>cat.category</item>
                //     // </Grid>
                //     <Select
                //     label="Category"
                //   >
                //     {Categories.map((cat) => (
                //       <option key={cat.category}>
                //         {cat.category}
                //       </option>
                //     ))}
                //   </Select>

                Categories.map((cat) => (
                <button style={{backgroundColor:"white", border:"none", borderRadius:"5px", padding:"15px", margin: "10px", display:"-ms-inline-flexbox", flexWrap: "" }} key={cat.Category} variant="conatained" onClick={()=>{navigate(`/joke/${cat.Category}`)}} > 
                      
                        {cat.Category}
                    
                </button>
                ))

                // <button variant="conatained">
                //     Link
                // </button>
            }

            </div>
            

        </div>
    );
};

export default Home;