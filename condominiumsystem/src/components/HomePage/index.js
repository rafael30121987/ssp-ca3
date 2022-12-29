import React from 'react';
import ListItem from '../ListItem';
import './style.css';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className='main-menu'>
        <div className="options-content">
            <Link className="option-register" to='/register'>Add New</Link>
            <Link className="option-delete" to='/delete'>Delet</Link>
        </div>
        <div>
            <h1>List redidents is here</h1>
        </div>
    </div>
   );

export default HomePage;