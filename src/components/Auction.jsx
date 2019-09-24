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
    const {logo, title, description, duration, entries} = this.props;
    
    return (
      <div className="text-center auction">
        <div className="auction-header">
            <img className="auction-logo" alt="..." src={logo}/>
            <h4 className="text-center auction-title">{title}</h4>
            <hr/>
        </div>
        <div className="auction-body">
            <label className="auction-description">
                {description}
            </label>
            <label className="auction-duration">
                {duration}
            </label>
        </div>
        <div className="auction-footer">
            <Link to="#" className="auction-entries">
                {entries}
            </Link>
        </div>
      </div>
    );
  }
}

export default Auction;
