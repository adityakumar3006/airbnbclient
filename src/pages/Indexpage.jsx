import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BASE_URL;

export default function Indexpage() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get("/places").then(response => {
            setPlaces([...response.data]);
        });
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, []);

    return (
        <div className='mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {places.length > 0 && places.map(place => (
                <Link to={'/place/' + place._id}>
                    <div className='bg-gray-100 mb-2 rounded-2xl flex'>
                        {place.photos?.[0] && (
                            <img className='rounded-2xl object-cover aspect-square' src={`https://air-bnb-clone-mern.onrender.com/uploads/${place.photos?.[0]}`} alt="" />

                        )}
                    </div>
                    <h2 className='font-bold'>{place.address}</h2>
                    <h3 className='text-sm  text-gray-400 '>   {place.title}</h3>

                    <div className='mt-1'>
                        <span className='font-bold'>Rs.{place.price}per night</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}