import React from 'react';
import Advertisment from './Advertisment/Advertisment';
import Categories from './Categories/Categories';
import Moresections from './Moresections';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider> </Slider>
            <Categories> </Categories>
            <Advertisment></Advertisment>
            <Moresections> </Moresections>

        </div>
    );
};

export default Home;