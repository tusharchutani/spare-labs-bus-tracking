import React, { Component } from 'react'; 
import './busInfo.css';
import {Popup}  from 'react-map-gl';

export default class BusDetails extends Component {
    constructor(props){
        super(props); 
        this.state = {
            hidden: false
        }
        this.popupRef = React.createRef();

    }

    getDirectionIcon(){
        const { direction } = this.props;
        switch(direction){
            case 'NORTH':
                return (<i>North</i>);
            
            case 'SOUTH':
            //
            break; 
            case 'EAST':
            //
            break;

            default: //west
        }
    }

    close(){

        this.setState({hidden:true});
    }

    componentWillReceiveProps(){
        //when new props are coming we know that the popup will have some new data
        this.setState({hidden:false});
    }
    
    render(){
        var latitude = this.props.latitude;
        var longitude = this.props.longitude;
        return !this.state.hidden && (<Popup ref={this.popupRef} latitude={latitude} longitude={longitude} closeButton={true} closeOnClick={true} onClose={this.close.bind(this)} anchor="top">
        <b>Vehicle No:</b> {this.props.vehicleNo} <br/>
        <b>Trip Id:</b> {this.props.tripId} <br/>
        <b>Route number:</b> {this.props.routNumber} <br/>
        <b>Direction:</b> {this.props.direction} <br/>
        <b>Destination :</b> {this.props.destination} <br/>
        <b>Time updated :</b> {this.props.recordedTime} <br/>
        </Popup>);
    }
}


