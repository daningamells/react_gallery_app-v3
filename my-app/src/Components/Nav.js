import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

  return(
    <nav className="main-nav">
        <ul>
        <li><NavLink to="/search/cats" onClick={() => props.onSearch('cats')}>Cats</NavLink></li>
        <li><NavLink to="/search/dogs" onClick={() => props.onSearch('dogs')}>Dogs</NavLink></li>
        <li><NavLink to="/search/sheep" onClick={() => props.onSearch('sheep')}>Sheep</NavLink></li>

        </ul>
      </nav>
  );
}

export default Nav;
