import React from 'react';
import Banner from '../../Section/Banner/Banner';
import Contact from '../../Section/Contact/Contact';
import Map from '../../Section/Map/Map';
import Service from '../../Section/Service/Service';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Service></Service>
            <Contact></Contact>
            <Map></Map>
        </main>
    );
};

export default Home;