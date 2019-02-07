import React, { Component } from 'react';
import TrainerNameTitleComponent from './TrainerNameTitleComponent';
import TableComponent from './TableComponent';
import NavbarComponent from './NavbarComponent';
import BookingButtonComponent from './BookingButtonComponent';
import './app1.css';
import logo from './logo.png';
//import './App.css';
class App extends Component {
  render() {
    return (
      <div>
      <NavbarComponent />
      <TrainerNameTitleComponent />
      <TableComponent />
      <br/><br/>
      <div>
      <BookingButtonComponent />
      <br/><br/>
      </div>
      </div>
    )
  }
}
export default App;
