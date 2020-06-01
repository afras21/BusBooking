import React from "react";
import PropTypes from 'prop-types';
import "./index.scss";
import { Grid, Row,Col} from "react-bootstrap";


class Gst extends React.Component {
    
  render() {
    return (
      <Grid>
          <Row>
              <Col md={3}/>
              <Col md={6}>
                <h2>Via GST Details </h2>
                <div className="card gstcard">
                    <div className="card-body">
                        <h5 className="card-title">GST NO: 29AA12345</h5>
                        <p className="card-text">Name: WAYBUS</p>
                        <p className="card-text">Address: 4th block koramangala, Bangalore.</p>
                    </div>
                </div>
          <Col md={3}/>
          </Col></Row>
    </Grid> 
    );
  }
}
export default Gst;
Gst.contextTypes = {
  router: PropTypes.object
};
