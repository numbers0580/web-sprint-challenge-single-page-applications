import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

function Home (props) {
    return(
        <div className='categories'>
            <Link to='/pizza'><button>Pizza</button></Link>
            <button>Burgers</button>
            <button>Steaks</button>
            <button>Pastas</button>
            <button>Salads</button>
            <button>Sushi</button>
        </div>
    );
};

export default Home;