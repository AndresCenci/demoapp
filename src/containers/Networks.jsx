import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Home = () => {
    const [loading,setLoading] = useState ();
    const [bikeSpot, setBikeSpot] = useState ([]);

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch ('http://api.citybik.es/v2/networks');
            console.log('response: ', response);
            const data = await response.json();
            console.log('data: ', data);
            setBikeSpot (data.networks);
        }
        fetchData ()
            .catch(console.error);
    }, []);
    
  
    
    
    return (
        <React.Fragment>
            <Header/>
            <body className='body'>
                {bikeSpot.map((networks) => {
                    return (
                        <h2>Empresa: {(networks.company !== null && typeof networks.company !== String && Array.isArray(networks.company) && networks.company.length > 0) ? networks.company[0] : ''}, ubicación: {networks.location.city} </h2>
                    )
                })}            
            </body> 
            <Footer/>
            </React.Fragment>
        )
    }
    
    export default Home;