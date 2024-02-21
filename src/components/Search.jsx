import React, { useEffect, useState } from 'react';
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "04d1608815b14e0797d9d13dc3525994";

function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza");
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();  
            console.log(data.results); 
            setFoodData(data.results);         
        }
        fetchFood();
    }, [query])
  return (
    <div className={styles.searchcontainer}>
      <input className={styles.input} 
      value={query} 
      onChange={(e) => setQuery(e.target.value)}
       type="text"
       />
    </div>
  )
}

export default Search
