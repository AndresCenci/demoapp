import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import PacmanLoader from "react-spinners/PacmanLoader";

const Bikes = () => {
    const [loading, setLoading] = useState(true);
    const [bikes, setBikes]= useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://api.citybik.es/v2/networks');
            const data = await response.json();
            setBikes(data.networks);
            setLoading(false); 
        }
        fetchData()
            .catch(console.error);
    }, []);

    return (
        <React.Fragment>
            <Header />
            <PacmanLoader color='#282c34' loading={loading} size={50} />
            {loading ? '' : <h1>World Bikes</h1>}
            {bikes.map((location, index) => {
                return (
                    <h2 key={index}>id: {location.id} name: {location.name}</h2>
                )
            })}
            <Footer />
        </React.Fragment>
    )
}

export default Bikes;
