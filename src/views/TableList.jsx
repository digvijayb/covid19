import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
    render() {
        return (
            <div className="content">
              <Grid fluid>
                <Row>
                  <Col md={12}>
                    <Card
                        plain
                        title="Why was this website created ?"
                        category=""
                        content={
                          <p>
                            It was created because my friend Pushpendra pal did not recommend me a movie
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

export default TableList;
