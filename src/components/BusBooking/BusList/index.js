import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Axios from 'axios';
import Collapsible from '../Collapsible';
import config from '../../../config.js';
import { showToastrOnSuccess } from '../../../utils/common';

export default class BusList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      seatDetails: [],
      collapseType: false,
      boardingPoints: [],
      droppingPoints: []
    };
  }

  toggle() {
    console.log('hitting here');
    this.handleChangeCollapse('seatDetail')();
    const {
      busDetails: { destinationId, scheduleId, sourceId, busId }
    } = this.props;
    const baseUrl = config.baseUrl;
    const url = `${baseUrl}${config.scheduleTrip}`;
    const body = {
      scheduleId,
      busId,
      sourceId,
      destinationId
    };
    console.log('Bus Details', body)

    // Axios.post(url, body)
    //   .then(res => {
        // if (res.data.data.busSeatDetails !== null) {
          this.setState({
            seatDetails: this.props.busDetails.bus_layout.couch_details,
            boardingPoints: this.props.busDetails.bus_layout.boarding_stages,
            droppingPoints: this.props.busDetails.bus_layout.dropoff_stages
          });
        // } else {
        //   showToastrOnSuccess(res.data.status.message);
        // }
      // })
      // .catch(error => {
      //   console.log(error);
      // });
  }
  handleChangeCollapse = collapseType => () => {
    this.setState(prev => ({
      collapse: prev.collapseType !== collapseType,
      collapseType: prev.collapseType === collapseType ? false : collapseType
    }));
  };

  amenitiesList = amenities => {
    const { amenitiesList } = amenities;
    // return amenities.map(item =>
    //   amenitiesList.find(inItem => inItem.amenityId === item.amenityId)
    // );
  };

  render() {
    const {
      available_seats,
      origin_id,
      destination_id,
      dep_time,
      arr_time,
      // rating,
      travels_name ,
      bus_type,
      // fares,
      cancellation_policy,
      // droppingLocations,
      // boardingLocations,
      amenities,
      // distance
    } = this.props.busDetails;
    const amenitiesList = amenities
    // this.amenitiesList(amenities);
    return (
      <div className="bus">
        <div className="sold-out"></div>
        <Row>
          <Col xs={6} md={3}>
            {travels_name}
          </Col>
          <Col xs={6} md={2}>
            {dep_time}
          </Col>
          <Col xs={6} md={1}>
            <span className="glyphicon glyphicon-arrow-right" />
          </Col>
          <Col xs={6} md={2}>
            {arr_time}
          </Col>
          <Col xs={6} md={2}>
            <span style={{color:"rgb(153, 153, 153)"}}>Starting from </span><br />
            <div style={{ display:"inline-block",marginRight:"3px"}}>
              <img className="img-responsive" width="10px" height="10px" src="./assets/img/rupees.svg"/></div>
            {'599'}
          </Col>
          <Col xs={6} md={2}>
            <Button bsStyle="primary" bsSize="sm" onClick={this.toggle}>
              Select Seats
            </Button> 
            <div style={{fontSize:"1rem",fontWeight:"600",color:"#999"}}>{available_seats} Seats Available</div>
          </Col>
        </Row>
        <Row className="busrow-details">
          <Col xs={6} md={3} style={{ fontSize: '12px' }}>
            {bus_type}
          </Col>
          <Col xs={6} md={2}>
            {origin_id}
          </Col>
          <Col xs={6} md={1}>
            {'distance'} KM
          </Col>
          <Col xs={6} md={2}>
            {destination_id}
          </Col>
          <Col xs={6} md={2}></Col>
        </Row>
        <Row className="searchBusTabs">
          <Col xs={3} md={2}>
            <span className="label label-info">{'rating'} Ratings </span>
          </Col>
          {amenitiesList.length ? (
            <Col
              xs={3}
              md={2}
              style={{ cursor: 'pointer' }}
              onClick={this.handleChangeCollapse('Amenities')}
            >
              <span className="collapseItem">Amenities </span>
            </Col>
          ) : (
            ''
          )}
          <Col
            xs={3}
            md={3}
            style={{ cursor: 'pointer' }}
            onClick={this.handleChangeCollapse('boardingDropping')}
          >
            <span className="collapseItem">Boarding & Dropping Point</span>
          </Col>
          <Col
            xs={3}
            md={2}
            style={{ cursor: 'pointer' }}
            onClick={this.handleChangeCollapse('policyDetail')}
          >
            <span className="collapseItem">Cancellation Policy</span>
          </Col>
        </Row>
        <Collapsible
          collapse={this.state.collapse}
          seatDetails={this.state.seatDetails}
          // droppingPoints={this.state.droppingPoints}
          // boardingPoints={this.state.boardingPoints}
          cancellationPolicy={cancellation_policy}
          collapseType={this.state.collapseType}
          // droppingLocations={droppingLocations}
          // boardingLocations={boardingLocations}
          busDetails={this.props.busDetails}
          amenitiesList={amenitiesList}
        />
      </div>
    );
  }
}
