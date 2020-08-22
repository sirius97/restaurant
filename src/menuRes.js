import React, { Component } from 'react';


import './menuRes.css';


class MenuRes extends Component  {
    state = {
      show: false
    }

    showHandler = () => {
      this.setState({show: !this.state.show})
    }

    render(){
      return(
        <div className = "menuButton">
          <button onClick = {this.showHandler}>
              <span class="open">☰</span>
              Menu
            </button>
          {this.state.show ? <div className="menuRes">
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
          </div>: null}
        </div> 
      );
    }
}

export default MenuRes;