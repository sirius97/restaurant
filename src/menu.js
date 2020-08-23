import React, { Component } from 'react';

import './menu.css';

const menu = () => {
return(
    <div className = "menu">
        <ul>  
                <li>
                  <a href="">Tacos</a>
                </li>
                <li>
                  <a href="">Beers</a>
                </li>
                <li>
                  <a href="">Wines</a>
                </li>
                <li>
                  <a href="">Desserts</a>
                </li>
                <li>
                  <a href="">Reservations</a>
                  </li>
        </ul>
    </div>);
}

export default menu;