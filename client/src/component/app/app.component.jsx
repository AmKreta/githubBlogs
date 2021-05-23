import React from 'react';
import { useSelector } from 'react-redux';
import './app.styles.scss';

const App = () => {
    const userName = useSelector(state => state.user.userName);
    return (
        <div className="amk">feed createBlog chat setting search profile</div>
    );
}

export default App;