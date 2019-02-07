import React, {Component} from 'react';

class BookingButtonComponent extends Component {
  	state = {
  			label: 'Book'
  	};

    render() {
          return (
              <div class="wrap">
              <button>{this.state.label}
              </button>
              </div>
  					)
      }
  }

export default BookingButtonComponent;
