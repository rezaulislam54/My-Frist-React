import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import { data } from "autoprefixer";
import Visitedcountry from "./Visitedcountry";

const Main = () => {

    const [countrys, setcountrys] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(rev => rev.json())
        .then(data => setcountrys(data));
    },[])

    const [visitedCountry, setvisitedCountry]=useState([]);

    function HandleVisitedCountry (country){
        const newvisitedCountry = [...visitedCountry, country];
        setvisitedCountry(newvisitedCountry);
    }

    return (
        <div>
            <div className=" rounded-md my-5 ">
                <h1 className="text-3xl mb-4 text-center font-bold text-blue-800">Visited Country Total : {visitedCountry.length} </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-3">
                    {
                        visitedCountry.map(data => <Visitedcountry key = {data.cca3} data={data}> </Visitedcountry>)
                    }
                </div>
            </div>

             <h1 className="text-4xl my-8 text-violet-900 font-bold text-center ">All Countrys Name And Flags</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3">
                {
                countrys.map(country => <Country 
                    key={country.ccn3} 
                    country={country}
                    HandleVisitedCountry={HandleVisitedCountry}
                    ></Country>)
                }
           </div>
        </div>
    );
};

export default Main;