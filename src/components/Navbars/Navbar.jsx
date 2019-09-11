import React              from "react";
import { Link }           from "react-router-dom";
import {faSearch}                 from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top"}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by Creative Tim"
              tag={Link}
            >
              <span>Horseco </span>
              the horse company
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    BLK•React
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle caret id="navbar_dropdown_auctions" color="default" data-toggle="dropdown" nav>
                    <p>Auctions</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbar_dropdown_auctions">
                  <DropdownItem onClick={e => e.preventDefault}>
                    Item1
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret id="navbar_dropdown_catalogs" color="default" data-toggle="dropdown" nav>
                    <p>Catalogs</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbar_dropdown_catalogs">
                  <DropdownItem onClick={e => e.preventDefault}>
                    Item1
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink onClick={e => e.preventDefault()}>
                  <p>Enter a Horse</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle caret id="navbar_dropdown_about" color="default" data-toggle="dropdown" nav>
                    <p>About</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbar_dropdown_about">
                  <DropdownItem onClick={e => e.preventDefault}>
                    Item1
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink onClick={e => e.preventDefault()}>
                  <p>Register/Login</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={faSearch} style={{ width: '20px', height: '20px'}}/>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
