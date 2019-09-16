import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="6">
              <div className="d-flex">
                <img alt="..." src={require("assets/img/logo.png")}/>
                <div className="d-flex btn-wrapper ml-4">
                  <Button
                    className="btn-icon btn-neutral btn-round mr-3"
                    id="tooltip230450801"
                  >
                    <i className="fab fa-facebook-f" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip230450801">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round"
                    id="tooltip622135962"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip622135962">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </div>
              <Row>
                <Col md="4">
                  <Nav>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        Enter a Horse
                      </NavLink>
                    </NavItem>
                    <label className="mt-4 font-weight-bold" style={{fontSize: '16px', color: '#B5C27B'}}>Auctions</label>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        Current Auctions
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        Calendar
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        Past Auction Results
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="4">
                  <Nav>
                    <NavItem>
                      <NavLink href="#">
                        Register/Login
                      </NavLink>
                    </NavItem>
                    <label className="mt-4 font-weight-bold" style={{fontSize: '16px', color: '#B5C27B'}}>Catalogs</label>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        Keeneland
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        HorsePlace 2
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        View All Catalogs
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="4">
                  <Nav>
                    <NavItem>
                      <NavLink href="#">
                        Search
                      </NavLink>
                    </NavItem>
                    <label className="mt-4 font-weight-bold" style={{fontSize: '16px', color: '#B5C27B'}}>About</label>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        Horseco History
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        FAQs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" tag={Link}>
                        Contact
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <label className="text-white" style={{fontSize: '18px'}}>Sign Up for our newsletter!</label>
              <InputGroup>
                <Input placeholder="Enter your email" type="email" id="email"/>
                <InputGroupAddon addonType="append">
                  <Button className="btn-subscribe">
                    SUBSCRIBE
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="copyright">
              <div><label style={{color: '#8E8E8E', fontSize: '14px'}}>1221 Marion Cardington Road, Marion, Ohio 23321</label></div>
              <div><label style={{color: '#8E8E8E', fontSize: '12px'}}>Copyrights 2019 And all that good stuff</label></div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
