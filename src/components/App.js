import React from 'react';
import { Navbar,Nav,NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
export default class App extends React.Component {
  render(){
    // const appState = this.props.mappedAppState;
    return(
      <div>
        <Navbar inverse  collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/todo">Mern Stack</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title="Features" id="basic-nav-dropdown">
                {/*<LinkContainer to="/todo"><NavItem eventKey={1}>Todos</NavItem></LinkContainer>*/}
                <LinkContainer to="/bs2todo"><NavItem eventKey={1}>Bootstrap Todos</NavItem></LinkContainer>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            {/*<Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>*/}
            <Nav pullRight>
                <LinkContainer to="/todo"><NavItem eventKey={1}>Todos</NavItem></LinkContainer>
                <LinkContainer to="/bs2todo"><NavItem eventKey={1}>Bootstrap2 Todos</NavItem></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          { /* Each Smaller Components */}
           {this.props.children}
        </div>
    </div>
   );
  }
}