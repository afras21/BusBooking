import React, { Component } from 'react';
import Select from 'react-select';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import config from '../../../config.js';
import BusList from '../BusList';
import Filter from '../Filter';
import MockOperatorsAPI from '../../../MockData/Operators.json'
import busDetailsApi from '../../../MockData/busDetails.json'


const addMonths = today => {
  let tomorrow = new Date();
  return new Date(tomorrow.setDate(today.getDate() + 31));
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }
  state = {
    selectedSource: null,
    selectedDestination: null,
    sourceError: false,
    destinationError: false,
    cities: [],
    filterValue: [],
    searchDate: new Date(),
    newSearch: [],
    search: false,
    searchResult: []
  };

  handleCheck = e => {
    const filterValue = this.state.filterValue;
    const index = filterValue.indexOf(e.target.value);
    if (index > -1) {
      filterValue.splice(index, 1);
    } else {
      filterValue.push(e.target.value);
    }
    this.setState({ filterValue });
  };

  handleChange = searchDate => this.setState({ searchDate });
  handleSourceChange = selectedSource => {
    this.setState({ selectedSource, sourceError: false });
  };
  handleDestinationChange = selectedDestination => {
    this.setState({ selectedDestination, destinationError: false });
  };
  componentDidMount() {
    const baseUrl = config.baseUrl;
    const url = `${baseUrl}${config.allCityList}?api_key=${config.apikey}`;
    Axios.get(url)
      .then(res => {
        console.log(res);
        this.setState({ cities: res.data.result });
      })
      .catch(error => {
        console.error(error);
      });
  }
  handleSearch = () => {
    console.log('Searching for buses');
    const { selectedSource, selectedDestination, searchDate } = this.state;
    if (!selectedSource) {
      this.setState({ sourceError: true });
    }
    if (!selectedDestination) {
      this.setState({ destinationError: true });
    }

    if (selectedSource && selectedDestination && searchDate) {
      const baseUrl = config.baseUrl;
      console.log('sss', this.state);
      // Axios.get(`http://apistaging.ticketsimply.com​/gds/api/availabilities/:origin_id/:destination_id/:travel_date.json`)
    console.log('-----',selectedSource.value);;
      const source = selectedSource.value;
      const dest = selectedDestination.value;
      const date =
        searchDate.getFullYear() +
        '-' +
        ('0' + (searchDate.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + searchDate.getDate()).slice(-2);

        // '0' + MyDate.getDate()).slice(-2)

        console.log('Date ---> ', date)
      // const url = `${baseUrl}${
      //   config.scheduleBusList
      // }/${source}/${dest}/${date}`;
      Axios.get(`http://apistaging.ticketsimply.com​/gds/api/availabilities/${source}/${dest}/${date}.json?api_key=${config.apikey}`)
        .then(res => {
          console.log('Search response', res);
          if (res.data && res.data.result.length) {
            // const data = res.data || {};
            const data = busDetailsApi.result
            console.log(data);
            this.setState({
              search: true,
              searchResult: data,
              amenitiesList: []
            });
          } else {
            this.setState({
              search: true,
              searchResult: [],
              amenitiesList: []
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  render() {
    const {
      selectedSource,
      selectedDestination,
      searchDate,
      sourceError,
      destinationError,
      searchResult = [],
      search,
      filterValue,
      amenitiesList,
      cities
    } = this.state;
    const citiesOptions = cities.map(item => ({
      label: item[1],
      value: item[0]
    }));
    let newSearch = [];
    filterValue.length
      ? searchResult.forEach(result => {
          const jj = filterValue.find(
            element =>
              result.busDetails.busType.toLowerCase().indexOf(element.toLowerCase()) > -1
          );
          if (jj) {
            newSearch.push(result);
          }
        })
      : newSearch.push(...searchResult);
      console.log('new-Search', newSearch);
    return (
      <Grid style={{ width: '100%', minHeight: '30%' }}>
        <Row className="search_pannel">
          <Col sm={6} md={4} xs={6} style={{ paddingBottom: 5 }}>
            <Select
              value={selectedSource}
              onChange={this.handleSourceChange}
              autosize={true}
              options={citiesOptions}
              isSearchable={true}
              placeholder="Source City"
            />
            {sourceError && (
              <span className="error-message">Please Select Source</span>
            )}
          </Col>
          <Col sm={6} md={4} xs={6} style={{ paddingBottom: 5 }}>
            <Select
              value={selectedDestination}
              onChange={this.handleDestinationChange}
              options={citiesOptions}
              autosize={true}
              placeholder="Destination City"
              isSearchable={true}
            />
            {destinationError && (
              <span className="error-message">Please Select Destination</span>
            )}
          </Col>
          <Col sm={6} md={2} xs={6} style={{ paddingBottom: 5 }}>
            <DatePicker
              selected={searchDate}
              onChange={this.handleChange}
              minDate={new Date()}
              maxDate={addMonths(new Date(), 5)}
              placeholderText="dd-mm-yyyy"
              todayButton="Today"
            />
          </Col>
          <Col sm={6} md={2} xs={6} style={{ paddingBottom: 5 }}>
            <Button
              block
              bsStyle="primary"
              className="searchbtn"
              onClick={this.handleSearch}
              type="submit"
            >
              Search
            </Button>
          </Col>
        </Row>
        <Row className="bus_pannel">
          <Col xs={12} sm={12} md={2} lg={2} className="left_pannel">
            <Filter
              handleCheck={this.handleCheck}
              filterValue={this.state.filterValue}
            />
          </Col>
          <Col xs={12} sm={12} md={10} lg={10} className="right_pannel">
            <Row className="businfo">
              <Col xs={6} md={3}>
                Traveller
              </Col>
              <Col xs={3}>Departure Time</Col>
              <Col xs={2}>Arrival Time</Col>
              <Col xs={2}>Fare</Col>
              <Col xs={2}>Availability</Col>
            </Row>
            {search ? (
              newSearch.length ? (
                newSearch.map((item, index) => {
                  console.log('------item', item)
                  return (
                    <div key={index}>
                      <BusList
                        key={index}
                        busDetails={item}
                        amenitiesList={amenitiesList || {}}
                        // destinationId={251}
                        // scheduleId={338510}
                        // sourceId={134}
                        // busId={4}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="alert alert-warning">
                  There are no buses between these two cities. Please try a
                  different date or search with an alternate route.
                </div>
              )
            ) : (
              ''
            )}
          </Col>
        </Row>
      </Grid>
    );
  }
}
