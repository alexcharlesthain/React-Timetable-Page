import React, {Component} from 'react';
import './app1.css';
import logo from './logo.png';
export default class TrainerNameTitleComponent extends Component {

render() {

    return (
    <div class="title">
    <h1>Joe Bloggs - ID 2798</h1>
    <h2>Lead Trainer</h2>
    <img src={logo} alt="Logo" />
    </div>)
  }
}
