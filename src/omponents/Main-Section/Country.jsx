import { useState } from "react";

const Country = ({country, HandleVisitedCountry}) => {
    const {name, flags, population, area} = country;

    const [visited, setvisited] = useState((false));

    function Handlevisit (){
        setvisited(!visited);
    }
    return (
        <div className=" {visited?'bg-gray-900'} border-2 border-orange-400 border-opacity-25 rounded-lg p-5 shadow-lg">
            <img className="mx-auto" src={flags.png} alt="" />
            <h1 className="text-2xl font-semibold my-4">Country Name : {name.common} </h1>
            <h2 className="text-xl font-normal">Official Name : {name.official} </h2>
            <h2 className="my-1 text-[15px]">population : {population} </h2>
            <h2>Area : {area} </h2>
           <div className="flex justify-between items-center mx-3 mt-4">
                 <button onClick={Handlevisit} className="py-1 px-3 text-white rounded-lg bg-blue-700">Visited</button>
                 <button onClick={() =>HandleVisitedCountry(country)} className="py-1 px-3 bg-blue-700 rounded-lg text-white">Add Visited</button> 
                {visited? 'This is visited' : 'I want Visit'};
           </div>
        </div>
    );
};

export default Country;