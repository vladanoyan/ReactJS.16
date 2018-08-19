import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './component.css';

class Home extends Component {
  render() {
    const list = this.props.list.map((item) => {
      return(
        <Col xs={12} md={4} key={item.id}>
          <Link to="/about">
            <p>{item.text}</p>
          </Link>
        </Col>
      )
    });
    return (
      <div className="Home">
        <Grid fluid>
          <Row>
            <Col xs={12} className="navbar"> Navbar </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Row>
            {list}
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};


export default connect(mapStateToProps)(Home);

