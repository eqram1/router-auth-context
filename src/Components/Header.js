
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleSignout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            });
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">eqramUI</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {user?.email && <span>Welcome,{user.email}</span>}

                <button onClick={handleSignout} className="btn btn-sm">Log out</button>
            </div>
        </div>
    );
};

export default Header;