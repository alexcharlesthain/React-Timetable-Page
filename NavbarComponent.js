import React, {Component} from 'react';
import './app1.css';

class NavbarComponent extends Component {
    render() {
      return (
        <div id="navbar">
          <div class="navbar-centered">
              <a href="#Tracker">Dashboard</a>
              <a href="#Dashboard">Resources</a>
              <a href="#Timetable">Timetable</a>
              <a href="#My Profile">My Profile</a>
              <a href="#Login">Login</a>
          </div>
          </div>
        );
      }
  }
  export default NavbarComponent;
