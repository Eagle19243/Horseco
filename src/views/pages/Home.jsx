import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Auction from "components/Auction.jsx"

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("home");
  }
  componentWillUnmount() {
    document.body.classList.toggle("home");
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="content-center">
              <img alt="..." src={require("assets/img/HORSECO_LOGO.png")} />
              <p className="mb-4" style={{color: '#115740', fontSize: '20px', fontWeight: '500'}}>
                Founded by a unique blend of horsemen, owners, technologists, and entrepreneurs.
              </p>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6" sm="6" xs="12">
                  <Button className="p-0 rounded-0">
                    <img className="rounded-0" alt="..." src={require("assets/img/Enter_A_Horse.png")} />
                  </Button>
                </Col>
                <Col lg="6" md="6" sm="6" xs="12">
                  <Button className="p-0 rounded-0">
                    <img className="rounded-0" alt="..." src={require("assets/img/Register_Login.png")} />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
          <section className="section section-lg" style={{height: '600px'}}>
            <img alt="..." src={require("assets/img/back_current_auctions.png")} 
              style={{position: 'absolute', height: '440px', width: '100%'}}/>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center font-weight-bold" 
                    style={{marginBottom: '20px', fontSize: '42px', letterSpacing: '3px'}}>
                      CURRENT AUCTIONS
                  </h1>
                  <hr style={{color: '#fff', width: '20%', marginLeft: 'auto', marginRight: 'auto', borderTop: '1px', borderStyle: 'solid'}}/>
                  <h2 className="text-center" 
                    style={{marginTop: '20px', fontSize: '20px'}}>
                      Click to view auction details
                  </h2>
                  <Row className="row-grid justify-content-center">
                    <Col md="3" sm="12">
                      <Auction />
                    </Col>
                    <Col md="3" sm="12">
                      <Auction />
                    </Col>
                    <Col md="3" sm="12">
                      <Auction />
                    </Col>
                  </Row>
                  <Row className="row-grid justify-content-center">
                    <Col md="3" sm="12">
                      <Button className="btn-view-all" block>
                        VIEW ALL CURRENT AUCTIONS
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg mt-4" style={{height: '440px'}}>
            <img alt="..." src={require("assets/img/back_past_auctions.png")} 
              style={{position: 'absolute', height: '440px', width: '100%'}}/>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center font-weight-bold" 
                    style={{marginBottom: '20px', fontSize: '42px', letterSpacing: '3px', marginTop: '100px'}}>
                      PAST AUCTIONS
                  </h1>
                  <hr style={{color: '#7AC2C8', width: '20%', marginLeft: 'auto', marginRight: 'auto', borderTop: '1px', borderStyle: 'solid'}}/>
                  <h2 className="text-center" 
                    style={{marginTop: '20px', fontSize: '20px', width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
                    Horseco maintains a mission to harness scientific and technological advancements while
                    providing superior customer service and better the sport of horse racing.
                  </h2>
                  <Row className="row-grid justify-content-center">
                    <Col md="3" sm="12" className="text-center">
                      <Button className="btn-view-result">
                        VIEW PAST RESULTS
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg mt-4" style={{height: '440px'}}>
            <img alt="..." src={require("assets/img/WRLD-EPS-01-0005.png")} 
              style={{position: 'absolute', height: '440px', width: '100%'}}/>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center font-weight-bold" 
                    style={{marginBottom: '20px', fontSize: '42px', letterSpacing: '3px', color: '#000'}}>
                      PARTNERS
                  </h1>
                  <hr style={{color: '#747474', width: '20%', marginLeft: 'auto', marginRight: 'auto', borderTop: '1px', borderStyle: 'solid'}}/>
                  <h2 className="text-center" 
                    style={{marginTop: '20px', fontSize: '20px', width: '75%', marginLeft: 'auto', marginRight: 'auto', color: '#000'}}>
                    Founded by a unique blend of horsemen, owners, technologists, and entrepreneurs.
                  </h2>
                  <Row className="row-grid justify-content-center">
                    <Col md="3" sm="12" className="text-right">
                      <img alt="..." className="rounded-0" src={require("assets/img/logo_magic_millions.png")}/>
                    </Col>
                    <Col md="3" sm="12" className="text-center">
                      <img alt="..." className="rounded-0" src={require("assets/img/logo_keeneland.png")}/>
                    </Col>
                    <Col md="3" sm="12" className="text-left">
                      <img alt="..." className="rounded-0" src={require("assets/img/logo_elturf.png")}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
