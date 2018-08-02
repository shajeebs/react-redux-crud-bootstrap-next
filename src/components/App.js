import React from 'react';
import { Navbar,Nav,NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
export default class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   // this.toggleAddTodo = this.toggleAddTodo.bind(this);
  //   // this.toggleShowEmps = this.toggleShowEmps.bind(this);
  //   //this.addTodo = this.addTodo.bind(this);
  // }
  // toggleAddTodo(e){
  //   e.preventDefault();
  //    this.props.mappedToggleAddTodo();
  // }
  // toggleShowEmps(e){
  //   e.preventDefault();
  //    this.props.mappedShowEmps();
  // }
  // addTodo(e){
  //     e.preventDefault();
  //   //alert('AddForm addTodo');
  //   const form = document.getElementById('addTodoForm');
  //     if(form.todoText.value !== ""  && form.todoDesc.value !== ""){
  //       const data = new FormData();
  //       data.append('todoText', form.todoText.value);
  //       data.append('todoDesc', form.todoDesc.value);
  //       // const data = {
  //       //   todoText: form.todoText.value,
  //       //   todoDesc: form.todoDesc.value
  //       // }
  //       this.props.mappedAddTodo(data);
  //     form.reset();
  //     }
  //     else{
  //       return ;
  //     }
  // }
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
                <MenuItem eventKey={3.1}>
                  <LinkContainer to="/todo">
                    <NavItem eventKey={1}>Todos</NavItem>
                  </LinkContainer>
                </MenuItem>
                <MenuItem eventKey={3.2}><LinkContainer to="/account">
                    <NavItem eventKey={1}>Accounts</NavItem>
                  </LinkContainer></MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/todo">
                    <NavItem eventKey={1}>Todos</NavItem>
                  </LinkContainer>
              {/*<LinkContainer to="/account">
                <NavItem eventKey={1}>Accounts</NavItem>
              </LinkContainer>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
        {/* {console.log(this.props)} */}
          {/* {appState.showAddTodo && <TodoForm addTodo={this.addTodo} /> } */}
          { /* Each Smaller Components */}
           {/*{appState.mappedShowTodos && <Todos /> }*/}
           {this.props.children}
          {/*{appState.mappedShowEmps && <Emps />}*/}
        </div>
    </div>
   );
  }
}