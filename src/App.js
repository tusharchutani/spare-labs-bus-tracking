import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactMapGL, {Marker} from 'react-map-gl';

class App extends Component {

//49.242390, -123.139717
  
  constructor(props){
    super(props);
    this.state = {
      viewport: {
        latitude: 49.242390,
        longitude: -123.139717,
        zoom: 11,
        width: window.innerWidth,
        height: window.innerHeight
      },
      buses:[]
    }
  }


   getTranslinkData(){
    var config = {
      headers: {'Accept': 'application/json'}
    };
    console.log("Calling JSON data from https://api.translink.ca/rttiapi/v1/buses?apikey=waQUpJIG28jIwXPLxhvG");
    axios.get('https://api.translink.ca/rttiapi/v1/buses?apikey=waQUpJIG28jIwXPLxhvG', config).then(function(response){
      console.log(response);
      console.log("_________________________________");
      console.table(response); 
  });
}
   

  render() {
  
    this.getTranslinkData();
    return (
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1IjoidHVzaGFyY2h1dGFuaSIsImEiOiJjampoczU2cjA1bzFxM3BsZm5pajBwOHY5In0.eOgARqASU9v0YNwEC2Bq6g"
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
        {this.state.buses.map((bus)=>(<Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
            <div className="mapboxgl-marker busMarker"></div>
          </Marker>)
        )}
        
        </ReactMapGL>
    );
  }
}

export default App;
