import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './index.scss';
import ceoImg from '../../../img/about/CEO.jpg';
import csoImg from '../../../img/about/CSO.jpg';
import ctoImg from '../../../img/about/CTO.jpg';

class About extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} lg={12} md={12}>
            <h4>About us</h4>
            <p>
              Way bus is India’s largest online bus ticketing
              platform that has transformed bus travel in the country by
              bringing ease and convenience to lac of Indians who travel
              using buses. Founded in 2020. By providing widest choice, superior
              customer service, lowest prices and unmatched benefits, Way Bus
              has served over 5 lacs customers have used one or more of
              our comprehensive travel-related services, which include bus
              ticketing, cab booking, hotel bookings, activities and ancillary
              services. we are India's largest platform for domestic hotels. We
              are a leading online travel company in India providing a 'best in
              class' customer experience with the goal to be 'India's Travel
              Planner'. Through our website, www.waybus.com, our other
              associated platforms, leisure and business travelers can explore,
              research, compare prices and book a wide range of services
              catering to their travel needs.
            </p>
            <br />
            <p>
              A strong and "trusted" travel brand of India, our strengths
              include a large and loyal customer base, a multi-channel platform
              for leisure and business travelers, a robust mobile eco-system for
              a spectrum of travelers and suppliers, a strong technology
              platform designed to deliver a high level of scalability and
              innovation and a seasoned senior management team comprising of
              industry executives with deep roots in the travel industry in
              India and abroad.
            </p>
            <hr />
          </Col>
        </Row>
        <Row className="team">
          <Col xs={12} sm={12} lg={12} md={12}>
            <h3>Management Team </h3>
            <div className="media">
              <div className="media-left media-top">
                <Image
                  src={ceoImg}
                  circle
                  className="media-object"
                  width="130"
                  height="130"
                />
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  Imran{' '}
                  <small>
                    <i>Founder & Chief Executive Officer (CEO)</i>
                  </small>
                </h4>
                <p>
                  Imran has been Chief Executive Officer of
                  waybus since June 2020. Prior to waybus. He’s also
                  worked as General Manager of Marketing and Innovation at
                  waybus. Imran has completed his Education from
                  your University.
                </p>
              </div>
            </div>
            <div className="media">
              <div className="media-left media-top">
                <Image
                  src={csoImg}
                  circle
                  className="media-object"
                  width="130"
                  height="130"
                />
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  Rafiq{' '}
                  <small>
                    <i>
                      Chief Operating Officer & Chief Strategy Officer (CSO)
                    </i>
                  </small>
                </h4>
                <p>
                  Rafiq is the Chief Operating Officer & Chief Strategy
                  Officer of waybus. Rafiq joined
                  Way bus in Jan 2020, prior to that he has expended over
                  nearly two decades in the Indian Sels and Marketing industry
                  at a leadership position as the Vice President of one of
                  India’s largest Company Munjal Showa.
                </p>
                <p>
                  Rafiq brings in deep experience in business strategy,
                  partnerships, sales & marketing and in running highly cost
                  effective operations. Noted for a comprehensive, practical,
                  management style focused on turnaround strategies and a stout
                  boardroom presence, Rafiq is a growth oriented,
                  focused leader with repeated success in sales & marketing,
                  expanding service offerings, building shareholder value,
                  driving vision and achieving critical strategic goals.
                </p>
                <p>
                  Currently as Chief Operating Office at Way bus, Rafiq
                  leads major functions like business development, sales,
                  marketing and operations, Working closely with the board and
                  top management, Rafiq ensures that both long term and short
                  term strategic goals are implemented seamlessly at Way Bus.
                </p>
              </div>
            </div>
            <div className="media">
              <div className="media-left media-top">
                <Image
                  src={ctoImg}
                  circle
                  className="media-object"
                  width="130"
                  height="130"
                />
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  Ganesh{' '}
                  <small>
                    <i>Chief Technology Officer (CTO)</i>
                  </small>
                </h4>
                <p>
                  Ganesh serves as Chief Technology Officer for waybus. He is responsible for defining an integral
                  role in setting the company’s strategic direction, development
                  and deploying the technology future growth. At waybus,
                  he leads effective delivery of scalable systems to the
                  customers, agents and bus operators by incorporating the
                  latest technology. A tech enthusiast, Ganesh comes with over 6
                  years of extensive experience in building scalable and
                  high-performing products across telecom, internet and mobile
                  ecommerce domains. Ganesh strongly believes that hard work and
                  commitment can overcome the barriers to success.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
About.contextTypes = {
  router: PropTypes.object
};
