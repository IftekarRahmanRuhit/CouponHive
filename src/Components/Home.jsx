import React from 'react';
import Banner from './Banner';
import TopBrands from './TopBrands';
import OnSellBrands from './OnSellBrands';
import FavouriteCategory from './FavouriteCategory';
import FAQ from './FAQ';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <TopBrands></TopBrands>
       
        <OnSellBrands></OnSellBrands>
        <HowItWorks></HowItWorks>
        <FavouriteCategory></FavouriteCategory>
        <FAQ></FAQ>
        </div>
    );
};

export default Home;