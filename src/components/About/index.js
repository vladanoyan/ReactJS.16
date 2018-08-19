import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './component.css';

class About extends Component {
  render() {
    const list = this.props.list.map((item) => {
      return(
        <Col xs={12} md={4} key={item.id}>
          <Link to="/">
            <p>{item.text}</p>
          </Link>
        </Col>
      )
    });
    return (
      <Grid fluid className="About">
        <Row>
          {list}
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};


export default connect(mapStateToProps)(About);

