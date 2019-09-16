import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

class Auction extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="text-center auction">
        <div className="auction-header">
            <img className="auction-logo" alt="..." src={require("assets/img/logo_keeneland.png")}/>
            <h4 className="text-center auction-title">KEENELAND</h4>
            <hr/>
        </div>
        <div className="auction-body">
            <label className="auction-description">
                2019 Keeneland November Sale BREEDING STOCK SALE
            </label>
            <label className="auction-duration">
                Tuesday, November.5 - Saturday. November 16.2019
            </label>
        </div>
        <div className="auction-footer">
            <Link to="#" className="auction-entries">
                ENTRIES CLOSE AUG. 1
            </Link>
        </div>
      </div>
    );
  }
}

export default Auction;
