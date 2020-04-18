import React from 'react';
import "./styles.css";

import Header from '../Header';
import List from '../List';

const HomePage = () => {

    return (
        <>
            <div className="wrapper">
                <Header />
            </div>
            <div className="wrapper">
                <List />
            </div>
        </>
    );
}
export default HomePage;