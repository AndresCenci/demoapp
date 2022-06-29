import React, { useEffect, useState, useMemo, useRef } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import PacmanLoader from "react-spinners/PacmanLoader";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountry]= useState([]);
    const [search, setSearch] = useState('');
    const searchInputRef = useRef(null);

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

    const handleSearch = event => {
        // setSearch(event.target.value);
        setSearch(searchInputRef.current.value);
    }

    const filteredCountries = useMemo(() => 
        countries.filter(country => country.country.toLowerCase().includes(search.toLowerCase())),
        [countries, search]
    )

    return (
        <React.Fragment>
            <Header />
            <PacmanLoader color='#282c34' loading={loading} size={50} />
            <input type='text' value={search} onChange={handleSearch} ref={searchInputRef} />
            {loading ? '' : <h1>Casos de COVID-19</h1>}
            {filteredCountries.map((country, index) => {
                return (
                    <h2 key={index}>País: {country.country} Casos: {country.todayCases}</h2>
                )
            })}
            <Footer />
        </React.Fragment>
    )
}

export default Home;
