import React from 'react';
import Banner from '../Banner/Banner';
import PlanTrip from '../PlanTrip/PlanTrip';
import TourPlans from '../TourPlans/TourPlans';
import WhoWeAre from '../WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <div>
            <Banner />
            <TourPlans />
            <WhoWeAre />
            <PlanTrip />
        </div>
    );
};

export default Home;