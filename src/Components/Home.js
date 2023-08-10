import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>this is home for{user?.displayName}</h2>
        </div>
    );
};

export default Home;