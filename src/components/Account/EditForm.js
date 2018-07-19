import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
 
const EditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditForm" onSubmit={props.editSubmitEmp}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Username: </ControlLabel>
            <input type="hidden" value={props.pocoData ? props.pocoData._id : ""} name="id"/>
            <FormControl type="text" placeholder="Enter Username"
              name="Username" defaultValue={props.pocoData ? props.pocoData.Username : ""} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Firstname: </ControlLabel>
            <FormControl type="text" placeholder="Enter Firstname"
              name="Firstname" defaultValue={props.pocoData ? props.pocoData.Firstname: ""} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Lastname: </ControlLabel>
            <FormControl type="text" placeholder="Enter Lastname"
              name="Lastname" defaultValue={props.pocoData ? props.pocoData.Lastname: ""} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Age: </ControlLabel>
            <FormControl type="text" placeholder="Enter Age"
              name="Age" defaultValue={props.pocoData ? props.pocoData.Age: ""} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Desc: </ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter description"
              name="Desc" defaultValue={props.pocoData ? props.pocoData.Desc : ""} />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
      </FormGroup>
    </form>
  );
}
 
export default EditForm;