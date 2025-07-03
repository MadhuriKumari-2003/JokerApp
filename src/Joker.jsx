import { useEffect, useState } from "react";
import "./Joker.css";

export default function Joker() {
    const URL =  "https://official-joke-api.appspot.com/random_joke";
    let [joke, setjoke] = useState({});
    let genJoke = async() =>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setjoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }

    //for first time rendering we use useEffect(func, dependencies)
    useEffect(()=>{
       async function getFirstJoke(){
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setjoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    },[]);
    return (
        <div className="joker-container">
            <h2>Enjoy Joke!</h2>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>      
            <button onClick={genJoke}> 🤣 New Joke</button>
            <p className="creator">👩‍💻 Created by <strong>Madhuri Kumari</strong></p>
        </div>
    )
}