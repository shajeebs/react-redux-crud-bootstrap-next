import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
// import { Link } from 'react-router';
import EditForm from './EditForm';
//import AddForm from './AddForm';
export default class Accounts extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.addAccount = this.addAccount.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDelete = this.cofirmDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    this.props.fetchAccounts();
  }
  showAddModal(){
      this.props.mappedshowAddModal();
     //this.props.mappedshowEditModal(null);
  }
  // showEditModal(dataToEdit){
  //    this.props.mappedshowEditModal(dataToEdit);
  // }
  hideEditModal(){
     this.props.mappedhideEditModal();
     this.props.mappedhideAddModal();
  }
  submitEdit(e){
    e.preventDefault();
    console.log(this.state);
    const editForm = document.getElementById('EditForm');
    if(editForm.Username.value !== ""){
      //console.log(editForm.Firstname.value);
      //debugger;
      const pocodata = new FormData();
      pocodata.append('id', editForm.id.value);
      pocodata.append('Username', editForm.Username.value);
      pocodata.append('Firstname', editForm.Firstname.value);
      pocodata.append('Lastname', editForm.Lastname.value);
      pocodata.append('Age', editForm.Age.value);
      pocodata.append('Desc', editForm.Desc.value);
      //  const pocodata = {
      //     _id: editForm._id.value,
      //     Username: editForm.Username.value,
      //     Firstname: editForm.Firstname.value,
      //     Lastname: editForm.Lastname.value,
      //     Age: editForm.Age.value,
      //     Desc: editForm.Desc.value
      //   };
     //console.log(pocodata);
     debugger;
     console.log(pocodata);
    this.props.mappedEditAccount(pocodata);
    //this.hideEditModal();
    }
    else{
      return;
    }
  }
  addAccount(e){
    e.preventDefault();
    const form = document.getElementById('EditForm');
    if(form.Username.value !== ""  && form.Desc.value !== ""){
      const data = new FormData();
      //console.log(form.Username.value);
      data.append('Username', form.Username.value);
      data.append('Firstname', form.Firstname.value);
      data.append('Lastname', form.Lastname.value);
      data.append('Age', form.Age.value);
      data.append('Desc', form.Desc.value);
      // const data = {
      //   todoText: form.todoText.value,
      //   todoDesc: form.todoDesc.value
      // }
      debugger;
      console.log(data);
      this.props.mappedAddNewAccount(data);
      //form.reset();
    }
    else{
      return ;
    }
  }
  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }
  // showDeleteModal(dataToDelete){
  //   this.props.mappedshowDeleteModal(dataToDelete);
  // }
  cofirmDelete(){
    this.props.mappedDeleteAccount(this.props.mappedPocoState.pocoToDelete);
  }
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render(){
    const pocoState = this.props.mappedPocoState;
   //console.log(pocoState);
    const pocos = pocoState.pocos;
    //const editAccount = pocoState.pocoToEdit;
    //console.log(pocos);
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Accounts</h3>
      {!pocos && pocoState.isFetching &&
        <p>Loading pocos....</p>
      }
      {pocos && pocos.length <= 0 && !pocoState.isFetching &&
        <p>No pocos Available. Add A poco to List here.</p>
      }
      {pocos && pocos.length > 0 && !pocoState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th colSpan="8"><Button onClick={() => this.showAddModal()} bsStyle="primary" bsSize="xsmall">
       <Glyphicon glyph="plus"/> Add New Item</Button></th></tr>
       <tr><th>AccountCode</th><th>AccountName</th><th>Balance</th><th>DebitBalance</th><th>CreditBalance</th></tr>
      </thead>
      <tbody>
        {pocos && pocos.map((poco,i) => <tr key={i}>
          <td>{poco.AccountCode}</td>
          <td>{poco.AccountName}</td>
          <td>{poco.Balance}</td>
          <td>{poco.DebitBalance}</td>
          <td>{poco.CreditBalance}</td>
          <td width="5"><Button onClick={() => this.props.mappedshowEditModal(poco)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
          <td width="5"><Button onClick={() => this.props.mappedshowDeleteModal(poco)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
          <td width="5"><Button onClick={() => this.props.mappedshowViewModal(poco)} bsStyle="primary" bsSize="xsmall"><Glyphicon glyph="eye-open" /></Button></td>
         </tr> )
      }
      </tbody>
      </table>
    }

    {/* Modal for Editing */}
    <Modal show={pocoState.showEditModal} onHide={this.hideEditModal} container={this} aria-labelledby="contained-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Add/Edit Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col-md-12">
        {
          <EditForm pocoData={pocoState.pocoToEdit} editSubmitAccount={ (pocoState.pocoToEdit && pocoState.pocoToEdit._id != null) ? this.submitEdit : this.addAccount} />
        }
        {pocoState.pocoToEdit  && pocoState.isFetching &&
          <Alert bsStyle="info">
            <strong>Updating...... </strong>
          </Alert>
        }
        {pocoState.pocoToEdit  && !pocoState.isFetching && pocoState.error &&
          <Alert bsStyle="danger">
          <strong>Failed. {pocoState.error} </strong>
          </Alert>
        }
        {pocoState.pocoToEdit  && !pocoState.isFetching && pocoState.successMsg &&
          <Alert bsStyle="success">
            Book <strong> {pocoState.pocoToEdit.AccountName} </strong>{pocoState.successMsg}
          </Alert>
        }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/* Modal for Deleting */}
    <Modal show={pocoState.showDeleteModal} onHide={this.props.mappedhideDeleteModal} container={this} aria-labelledby="contained-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Delete Your Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {pocoState.pocoToDelete && !pocoState.error && !pocoState.isFetching &&
        <Alert bsStyle="warning">
        Are you sure you want to delete this poco <strong>{pocoState.pocoToDelete.pocoText} </strong> ?
        </Alert>
      }
      {pocoState.pocoToDelete && pocoState.error &&
        <Alert bsStyle="warning">
        Failed. <strong>{pocoState.error} </strong>
        </Alert>
      }
      {pocoState.pocoToDelete && !pocoState.error && pocoState.isFetching &&
        <Alert bsStyle="success">
          <strong>Deleting.... </strong>
        </Alert>
      }
      {!pocoState.pocoToDelete && !pocoState.error && !pocoState.isFetching &&
        <Alert bsStyle="success">
        poco <strong>{pocoState.successMsg} </strong>
        </Alert>
      }
      </Modal.Body>/
      <Modal.Footer>
      {!pocoState.successMsg && !pocoState.isFetching &&
        <div>
        <Button onClick={this.cofirmDelete}>Yes</Button>
        <Button onClick={this.hideDeleteModal}>No</Button>
        </div>
      }
      {pocoState.successMsg && !pocoState.isFetching &&
        <Button onClick={this.hideDeleteModal}>Close</Button>
      }
      </Modal.Footer>
    </Modal>

    {/* Modal for View */}
    <Modal show={pocoState.showViewModal} onHide={this.props.mappedhideViewModal} container={this} aria-labelledby="contained-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Account Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col-md-12">
        {pocoState.pocoToView && !pocoState.isFetching &&
         <div>
           {/* <button className="btn btn-info">
              <span className="glyphicon glyphicon-arrow-left"></span> Back to Main list
            </button> */}
           <h3>{pocoState.pocoToView.AccountCode}</h3>
           <p>{pocoState.pocoToView.AccountName}</p>
           <p>{pocoState.pocoToView.Balance}</p>
           <p>{pocoState.pocoToView.DebitBalance}</p>
           <p>{pocoState.pocoToView.CreditBalance}</p>
         </div>
       }
        {pocoState.pocoToView  && pocoState.isFetching &&
          <Alert bsStyle="info">
            <strong>Updating...... </strong>
          </Alert>
        }
        {pocoState.pocoToView  && !pocoState.isFetching && pocoState.error &&
          <Alert bsStyle="danger">
          <strong>Failed. {pocoState.error} </strong>
          </Alert>
        }
        {pocoState.pocoToView  && !pocoState.isFetching && pocoState.successMsg &&
          <Alert bsStyle="success">
            Book <strong> {pocoState.pocoToView.Username} </strong>{pocoState.successMsg}
          </Alert>
        }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.mappedhideViewModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
    );
  }
}