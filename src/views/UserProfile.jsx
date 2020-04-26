import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class UserProfile extends Component {
    render() {
        return (
            <div className="content">
              <Grid fluid>
                <Row>
                  <Col md={12}>
                    <Card
                        plain
                        title="What is similar country ?"
                        category=""
                        content={
                          <p>
                            Similar country is a country that is :
                            <br/> 1) Ahead in terms of number of active cases than current country
                            <br/>2) Has similar trend as of current country on the basis of multiple criterias
                          </p>
                        }
                    />
                  </Col>
                  <Col md={12}>
                    <Card
                        plain
                        title="What are the different criteria used for evaluation ?"
                        category=""
                        content={
                          <p>
                            1) Total number of cases
                            <br/>2) Total Deaths
                            <br/>3) Total cases per million
                            <br/>4) Total deaths per million
                            <br/>5) Total tests
                            <br/>6) Total tests per million
                          </p>
                        }
                    />
                  </Col>
                </Row>
              </Grid>
            </div>
        );
    }
}

export default UserProfile;
