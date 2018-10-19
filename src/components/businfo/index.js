import React, { Component } from 'react'; 
import  {Marker} from 'react-map-gl';
import './busInfo.css';

export default class BusInfo extends Component {

    openPopup(){
        this.props.openPopUp(this.props);
    }
    
    render(){
        var latitude = this.props.Latitude;
        var longitude = this.props.Longitude;
        return (<Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
           <i onClick={this.openPopup.bind(this)} class="fas fa-bus-alt bus"></i>
          </Marker>);
    }
}


