import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
// import { Link } from 'react-router';
import TodoEditForm from './TodoEditForm';
 
export default class Todos extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteTodo = this.cofirmDeleteTodo.bind(this);

    this.savePoco = this.savePoco.bind(this);
    this.updatePocoState = this.updatePocoState.bind(this);
  }
 
  componentWillMount() {
    this.props.fetchAllPocos();
  }
 
  showEditModal(pocoToEdit){
    if(pocoToEdit){
      this.props.mappedshowEditModal(pocoToEdit);
    }
    else
      this.props.mappedshowEditModal({name: "", comment: ""});
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }
 
  showDeleteModal(pocoToDelete){
    this.props.mappedshowDeleteModal(pocoToDelete);
  }
 
  cofirmDeleteTodo(){
    this.props.mappedDeletePoco(this.props.mappedTodoState.todoToDelete);
  }
 
  updatePocoState(event) {
    const fieldName = event.target.name;
    const todoState = this.props.mappedTodoState;
    const editData = todoState.todoToEdit;
    editData[fieldName] = event.target.value;
    return this.setState({todoState: editData});
  }
  
  savePoco(event) {
    event.preventDefault();
    const saveData = this.props.mappedTodoState.todoToEdit;
    if(saveData._id) { this.props.mappedEditPoco(saveData); }
    else { this.props.mappedAddNewPoco(saveData); }
  }

  render(){
    const todoState = this.props.mappedTodoState;
    const pocos = todoState.pocos;
    const editTodo = todoState.todoToEdit;
    return(
      <div className="col-md-12">
      
      <h3 className="centerAlign">Todos</h3>
      <Button onClick={() => this.showEditModal()} bsStyle="primary" bsSize="xsmall">
       <Glyphicon glyph="plus"/> Add New Item</Button>
      {todoState.isFetching &&
        <p>Loading todos....</p>
      }
      {pocos && pocos.length <= 0 && !todoState.isFetching &&
        <p>No Todos Available. Add A Todo to List here.</p>
      }
      {pocos && pocos.length > 0 && !todoState.isFetching &&
      <table className="table booksTable">
      <thead>
      <tr><th colSpan="5"></th></tr>
       <tr><th>Id</th><th>Todo</th><th>Comment</th><th>Modified</th><th>Created</th>
       <th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>
        {pocos.map((todo,i) => <tr key={i}>
        <td>{todo._id}</td>
        <td>{todo.name}</td>
        <td>{todo.comment}</td>
        <td>{todo.modified}</td>
        <td>{todo.created}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(todo)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(todo)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td width="5"><Button onClick={() => this.props.mappedshowViewModal(todo)} bsStyle="primary" bsSize="xsmall"><Glyphicon glyph="eye-open" /></Button></td>
         </tr> )
      }
      </tbody>
      </table>
    }
 
     {/*Modal for editing todo */}
    <Modal
      show={todoState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Your Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
      { editTodo  && <TodoEditForm pocoToEdit={todoState.todoToEdit} onSave={this.savePoco} onChange={this.updatePocoState} /> }

    {editTodo  && todoState.isFetching &&
      <Alert bsStyle="info">
        <strong>Updating...... </strong>
      </Alert>
    }
    {editTodo  && !todoState.isFetching && todoState.error &&
      <Alert bsStyle="danger">
        <strong>Failed. {todoState.error} </strong>
      </Alert>
    }
    {editTodo  && !todoState.isFetching && todoState.successMsg &&
      <Alert bsStyle="success">
        Book <strong> {editTodo.name} </strong>{todoState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>
 
    {/* Modal for deleting todo */}
    <Modal show={todoState.showDeleteModal} onHide={this.hideDeleteModal} container={this}
    aria-labelledby="contained-modal-title">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete Your Book</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {todoState.todoToDelete && !todoState.error && !todoState.isFetching &&
      <Alert bsStyle="warning">
        Are you sure you want to delete this todo <strong>{todoState.todoToDelete.name} </strong> ?
      </Alert>
    }
    {todoState.todoToDelete && todoState.error &&
      <Alert bsStyle="warning">
        Failed. <strong>{todoState.error} </strong>
      </Alert>
    }
 
    {todoState.todoToDelete && !todoState.error && todoState.isFetching &&
      <Alert bsStyle="success">
        <strong>Deleting.... </strong>
      </Alert>
    }
 
    {!todoState.todoToDelete && !todoState.error && !todoState.isFetching&&
      <Alert bsStyle="success">
        Todo <strong>{todoState.successMsg} </strong>
      </Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!todoState.successMsg && !todoState.isFetching &&
       <div>
        <Button onClick={this.cofirmDeleteTodo}>Yes</Button>
        <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {todoState.successMsg && !todoState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
 
    {/* Modal for View */}
    <Modal show={todoState.showViewModal} onHide={this.props.mappedhideViewModal} container={this} aria-labelledby="contained-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Account Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col-md-12">
        {todoState.pocoToView && !todoState.isFetching &&
         <div>
           {/* <button className="btn btn-info">
              <span className="glyphicon glyphicon-arrow-left"></span> Back to Main list
            </button> */}
           <h3>{todoState.pocoToView.name}</h3>
           <p>{todoState.pocoToView.comment}</p>
         </div>
       }
        {todoState.pocoToView  && todoState.isFetching &&
          <Alert bsStyle="info">
            <strong>Updating...... </strong>
          </Alert>
        }
        {todoState.pocoToView  && !todoState.isFetching && todoState.error &&
          <Alert bsStyle="danger">
          <strong>Failed. {todoState.error} </strong>
          </Alert>
        }
        {todoState.pocoToView  && !todoState.isFetching && todoState.successMsg &&
          <Alert bsStyle="success">
            Book <strong> {todoState.pocoToView.name} </strong>{todoState.successMsg}
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