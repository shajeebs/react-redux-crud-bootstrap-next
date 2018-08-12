import React from 'react';
// import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import TodoEditForm from './TodoEditForm';
 
const getCaret = direction => {
    if (direction === 'asc') {
        return ( <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span> );
    }
    if (direction === 'desc') {
        return ( <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span> );
    }
    return ( <span> <i className="fa fa-sort" aria-hidden="true" /></span> );
};
const titleFormatter = (cell, row) => {
  return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
};

export default class BsTodos extends React.Component {
  constructor(props){
    super(props);
    this.options = {  sortIndicator:true, noDataText:'No poco data available', sizePerPage:10 };
    this.selectRowProp = {
      mode:'radio',
      bgColor:'#c1f291',
      clickToSelect:true,
      hideSelectColumn:true,
      clickToSelectAndEditCell: true,
      onSelect:this.handleRowSelect
    };
    this.state = {
      //selectPocoRow:'',
      activePage: 1,
      errType: '',
      errMsg: ''
    };
    this.onNavigatePage = this.onNavigatePage.bind(this);
    this.onDeleteRowItem = this.onDeleteRowItem.bind(this);
    this.handleRowSelect = this.handleRowSelect.bind(this);
    
    this.pocoValidator = this.pocoValidator.bind(this);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteTodo = this.cofirmDeleteTodo.bind(this);
    this.handleInsertedRow = this.handleInsertedRow.bind(this);

    this.savePoco = this.savePoco.bind(this);
    this.updatePocoState = this.updatePocoState.bind(this);
  }
   onNavigatePage = (page, sizePerPage) => {
    //this.props.actions.loadAllProducts(page);
    this.props.fetchAllPocos();
    this.setState({activePage: page});
  }
  onDeleteRowItem = (row) => {
    console.log(row[0]);
    console.log(this.props);
    //this.props.mappedDeletePoco({_id:row[0]});
  }
  handleRowSelect(row, isSelected, e) {
    console.log(row);
    //console.log(this.props);
    
    //this.setState({selectPocoRow: row});
    //this.setState({todoState: row});
  }

  pocoValidator = (value, row) => {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    if (!value) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be inserted';
      response.notification.title = 'Requested Value';
    } else if (value.length < 10) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must have 10+ characters';
      response.notification.title = 'Invalid Value';
    }
    return response;
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
  handleInsertedRow(row) {
    console.log(row);
    this.props.mappedAddNewPoco(row);
    // const saveData = this.props.mappedTodoState.todoToEdit;
    // if(saveData._id) { this.props.mappedEditPoco(saveData); }
    // else { this.props.mappedAddNewPoco(saveData); }
  }

  render(){
    const todoState = this.props.mappedTodoState;
    const pocos = todoState.pocos;
    const options = {
      hideSizePerPage: true,
      page: this.state.activePage,
      onPageChange: this.onNavigatePage,
      onDeleteRow: this.onDeleteRowItem,
      afterInsertRow: this.handleInsertedRow,
      beforeShowError: (type, msg) => {
        this.setState({
          errType: type,  // return false or do not return will not trigger the toastr,
          errMsg: msg     // if you want the toastr popup, you should return true always.
        });
        return false;
      }
    };
    const cellEditProp = {
      mode: 'click',
      blurToSave: true
    };
// console.log(this.state);
// console.log(this.props);
    return(
      <div>
      <h3 className="centerAlign">BsTodos</h3>
      <p style={ { color: 'red' } }>{ `[${this.state.errType}]: ${this.state.errMsg}` }</p>
      { todoState.isFetching && <p>Loading BsTodos....</p> }
      { pocos && pocos.length <= 0 && !todoState.isFetching && <p>No BsTodos Available. Add A Todo to List here.</p> }
      { pocos && pocos.length > 0 && !todoState.isFetching &&
          <BootstrapTable 
            data={pocos} insertRow={ true } selectRow={this.selectRowProp}
            fetchInfo={{dataTotalSize: pocos.resultsCount}}
            options={options} striped remote
            hover
            condensed
            pagination
            insertRow
            deleteRow 
            search exportCSV>
            <TableHeaderColumn hidden dataField="_id" isKey={ true } autoValue={ false }> Id </TableHeaderColumn>
            <TableHeaderColumn editable={ { validator: this.pocoValidator } } dataField="name"> Name </TableHeaderColumn>
            <TableHeaderColumn editable={ { validator: this.pocoValidator } } dataField="comment"> Comment </TableHeaderColumn>
            <TableHeaderColumn dataField="created" autoValue={ false }> Created Date </TableHeaderColumn>
            <TableHeaderColumn dataField="modified" autoValue={ false }> Modification Date
            </TableHeaderColumn>
          </BootstrapTable>
    }
      </div>
    );
  }
}