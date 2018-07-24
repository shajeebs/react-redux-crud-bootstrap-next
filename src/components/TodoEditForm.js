import React from 'react';
//import { Field, reduxForm } from 'redux-form';
 
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
const TodoEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditTodoForm" onSubmit={props.submitEditTodo}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Todo: </ControlLabel>
          <input type="hidden" value={props.todoData._id} name="id"/>
            <FormControl onChange={props.todoData.name}
              type="text" placeholder="Enter todo"
              name="name" defaultValue={props.todoData.name}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description" onChange={props.todoData.comment}
                  name="comment" defaultValue={props.todoData.comment}
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}
 
export default TodoEditForm;