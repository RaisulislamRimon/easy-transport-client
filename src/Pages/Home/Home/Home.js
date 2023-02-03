import React,{ useEffect, useState} from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CommunitiesCards from "../Communities/CommunitiesCards";
import Rides from "../Rides/Rides";
import Safety from "../Safety/Safety";

const Home = () => {
  const [cars,Setcars]=useState([])
  console.log(cars)
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>Setcars(data))
},[])
  return (
    <div>
      <Banner />
      <Rides></Rides>
      <h1 className=' text-center text-4xl font-bold mb-12 '>What Do You Need?
            </h1>
       <div className='grid gap-3 mt-8 mx-6 mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
       
       {
          cars.map(cars=><Category key={cars._id} cars={cars}></Category> )
       } 
       </div>
    
      <CommunitiesCards></CommunitiesCards>
      <Safety></Safety>
      
    </div>
  );
};

export default Home;
