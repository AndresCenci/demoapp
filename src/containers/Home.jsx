import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import PacmanLoader from "react-spinners/PacmanLoader";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountry]= useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://disease.sh/v3/covid-19/countries');
            const data = await response.json();
            setCountry(data);
            setLoading(false);    
        }
        fetchData()
            .catch(console.error);
    }, []);

    return (
        <React.Fragment>
            <Header />
            <PacmanLoader color='#282c34' loading={loading} size={50} />
            {loading ? '' : <h1>Casos de COVID-19</h1>}
            {countries.map((country, index) => {
                return (
                    <h2 key={index}>País: {country.country} Casos: {country.todayCases}</h2>
                )
            })}
            <Footer />
        </React.Fragment>
    )
}

export default Home;
