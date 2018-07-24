import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
const EditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditForm" onSubmit={props.editSubmitEmp}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>AccountCode: </ControlLabel>
            <input type="hidden" value={props.pocoData ? props.pocoData._id : ""} name="id"/>
            <FormControl type="text" placeholder="Enter Username"
              name="Username" defaultValue={props.pocoData ? props.pocoData.AccountCode : ""} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>AccountName: </ControlLabel>
            <FormControl type="text" placeholder="Enter Firstname"
              name="Firstname" defaultValue={props.pocoData ? props.pocoData.AccountName: ""} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Balance: </ControlLabel>
            <FormControl type="text" placeholder="Enter Lastname"
              name="Lastname" defaultValue={props.pocoData ? props.pocoData.Balance: ""} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>DebitBalance: </ControlLabel>
            <FormControl type="text" placeholder="Enter DebitBalance"
              name="Age" defaultValue={props.pocoData ? props.pocoData.DebitBalance: ""} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>CreditBalance: </ControlLabel>
            <FormControl componentClass="text" placeholder="Enter CreditBalance"
              name="Desc" defaultValue={props.pocoData ? props.pocoData.CreditBalance : ""} />
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