const Visitedcountry = ({data}) => {
    const {name, flags,population} = data;
    return (
        <div className="border-2 border-black border-opacity-40 rounded-lg p-6 shadow-lg bg-white">
             <h1 className="text-xl font-semibold mb-2">Country Name : {name.common} </h1>
             <h1 className=" font-medium mb-2">Population : {population}</h1>
            <img className="mx-auto" src={flags.png} alt="" />
        </div>
    );
};

export default Visitedcountry;