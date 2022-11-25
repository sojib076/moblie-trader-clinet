import React from 'react';
import Advertisment from './Advertisment/Advertisment';
import Categories from './Categories/Categories';
import Slider from './Slider/Slider';

const Home = () => {
    console.log(process.env.REACT_APP_API);
    return (
        <div>
            <Slider> </Slider>
            <Advertisment></Advertisment>
            <Categories> </Categories>
        </div>
    );
};

export default Home;