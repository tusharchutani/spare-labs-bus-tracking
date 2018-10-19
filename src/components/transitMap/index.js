import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import BusInfo from '../businfo';
import BusDetails from '../businfo/busDetails'
import { setBusLocations } from '../../actions';
import './transitMap.css';
class TransitMap extends Component {
    
    //vancouver lat: 49.242390 lon is: -123.139717
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            viewport: {
              latitude: 49.242390,
              longitude: -123.139717,
              zoom: 11,
              width: window.innerWidth,
              height: window.innerHeight
            },
            popUpHidden:true,
            busDetails:null
          }
          this.openPopUp = this.openPopUp.bind(this);
    }
    openPopUp(details){
        const busDetails = {
            vehicleNo:details.VehicleNo,
            tripId:details.TripId,
            routNumber:details.TripId,
            destination:details.Destination,
            direction:details.Direction,
            pattern:details.Pattern,
            recordedTime: details.RecordedTime,
            latitude: details.Latitude,
            longitude: details.Longitude
        }
        this.setState({popUpHidden:false, busDetails});
    }

    getBusData(){
        this.setState({loading:true});
        this.props.setBusLocations();
        this.setState({loading:false});
    }
    componentWillMount(){
        this.getBusData();
        //update every 10 seconds
        setInterval(()=>{
                this.getBusData();
        }, 100000);
    }

    render(){
        const { buses } = this.props; 

       return (<ReactMapGL
        mapStyle={MAP_STYLE}
        mapboxApiAccessToken={API_KEY}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
      {this.state.loading && <div className="loadingContiner">
          <img alt="Loading" id="images" src={require('../../assets/loading.gif')} height={30} width={30} /> 
      </div>}
     {buses.map((bus,i)=>(<BusInfo key={i} openPopUp={this.openPopUp} {...bus}/>))}
      {!this.state.popUpHidden && <BusDetails {...this.state.busDetails}/>}
      </ReactMapGL>);
    }
}

const API_KEY = "pk.eyJ1IjoidHVzaGFyY2h1dGFuaSIsImEiOiJjampoczU2cjA1bzFxM3BsZm5pajBwOHY5In0.eOgARqASU9v0YNwEC2Bq6g";
const MAP_STYLE = "mapbox://styles/mapbox/streets-v9";
const mapStateToProps = state => {
    return {
        buses: state.transitInfo.buses
    }
}

const mapActionsToProps = {
    setBusLocations:setBusLocations
  }

export default connect(mapStateToProps, mapActionsToProps)(TransitMap)