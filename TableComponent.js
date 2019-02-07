import React, {Component} from 'react';
import './app1.css';
export default class TableComponent extends Component {

  render() {
    return (
      <div>
      <p></p>
      <div class="timetable">
      <h2>Timetable</h2>
      </div>
      <table>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
        <tr>
          <td contenteditable="true">Lesson - JAVA</td>
          <td contenteditable="true">Lesson - JAVA</td>
          <td contenteditable="true">Lesson - JAVA</td>
          <td contenteditable="true">Holiday</td>
          <td contenteditable="true">Meeting</td>
        </tr>
        <tr>
          <td contenteditable="true">Lesson - AGILE</td>
          <td contenteditable="true">Meeting</td>
          <td contenteditable="true">Lesson - MySQL</td>
          <td contenteditable="true">Lesson - JAVA</td>
          <td contenteditable="true">Lesson - JAVA EE</td>
        </tr>
        <tr>
          <td contenteditable="true">Lesson - MySQL</td>
          <td contenteditable="true">Lesson - MySQL</td>
          <td contenteditable="true">Lesson - AGILE</td>
          <td contenteditable="true">Lesson - JAVA</td>
          <td contenteditable="true">Holiday</td>
        </tr>
        <tr>
          <td contenteditable="true">Holiday</td>
          <td contenteditable="true">Lesson - MySQL</td>
          <td contenteditable="true">Lesson - JAVA EE</td>
          <td contenteditable="true">Lesson - JAVA</td>
          <td contenteditable="true">Lesson - JAVA EE</td>
        </tr>
        <tr>
          <td contenteditable="true">Holiday</td>
          <td contenteditable="true">Lesson - MySQL</td>
          <td contenteditable="true">Lesson - JAVA</td>
          <td contenteditable="true">Lesson - JAVA EE</td>
          <td contenteditable="true">Meeting</td>
        </tr>
        <tr>
          <td contenteditable="true">Holiday</td>
          <td contenteditable="true">Meeting - ROOM 3</td>
          <td contenteditable="true">Meeting - ROOM 2</td>
          <td contenteditable="true">Meeting - ROOM 3</td>
          <td contenteditable="true">Lesson - DATABASES</td>
        </tr>
      </table>
      </div>
    )
  }
}
