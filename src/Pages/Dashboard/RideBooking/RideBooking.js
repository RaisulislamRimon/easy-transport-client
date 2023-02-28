
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";


const RideBooking = () =>{
    const {user} = useContext(AuthContext)

    const url =`http://localhost:5000/ridebooking/${user?.email}`
    console.log(url);
    const {data:services = []} = useQuery({
        queryKey:['services',user?.email],
        queryFn:async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
           
        }
        
    })
    console.log(services)
    return(
        <div>
            <h1 className='text-3xl text-bold '>My Ride Booking</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>OrderName</th>
                            <th>Price</th>
                            <th>location</th>
                            <th>Number</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                        services.map((ser,i)=><tr key={ser._id}>
                        <th>{i+1}</th>
                        <td>{ser.name}</td>
                        <td>{ser.address}</td>
                        <td>{ser.phone}</td>
                        <td>Number</td>
                    </tr>)
                       } 
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default RideBooking;