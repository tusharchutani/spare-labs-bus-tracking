import React, { Component } from 'react'; 
import  {Marker} from 'react-map-gl';
import './busInfo.css';

export default class BusInfo extends Component {

    openPopup(){
        //call the pop up function in the main map view since that is where the popup will show
        this.props.openPopUp(this.props);
    }
    
    render(){
        var latitude = this.props.Latitude;
        var longitude = this.props.Longitude;
        return (<Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
           <i onClick={this.openPopup.bind(this)} className="fas fa-bus-alt bus"></i>
          </Marker>);
    }
}


