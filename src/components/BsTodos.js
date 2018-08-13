import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
 
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
      // onSelect:this.handleRowSelect
    };
    this.state = {
      //selectPocoRow:'',
      activePage: 1,
      errType: '',
      errMsg: ''
    };
    this.onNavigatePage = this.onNavigatePage.bind(this);
    this.onDeleteRowItem = this.onDeleteRowItem.bind(this);
    this.pocoValidator = this.pocoValidator.bind(this);
    this.handleInsertedRow = this.handleInsertedRow.bind(this);
  }
   onNavigatePage = (page, sizePerPage) => {
    //this.props.actions.loadAllProducts(page);
    this.props.fetchAllPocos();
    this.setState({activePage: page});
  }
  onDeleteRowItem = (row) => {
    // console.log(row[0]);
    this.props.mappedDeletePoco({_id:row[0]});
  }

  pocoValidator = (value, row) => {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    if (!value) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be inserted';
      response.notification.title = 'Requested Value';
    } else if (value.length < 5) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must have 5+ characters';
      response.notification.title = 'Invalid Value';
    }
    return response;
  }

  componentWillMount() {
    this.props.fetchAllPocos();
  }

  handleInsertedRow(row) {
    console.log(row);
    this.props.mappedAddNewPoco(row);
    // const saveData = this.props.mappedTodoState.todoToEdit;
    // if(saveData._id) { this.props.mappedEditPoco(saveData); }
    // else { this.props.mappedAddNewPoco(saveData); }
  }

  handleAfterSaveCell(row, cellName, cellValue) {
    console.log(row)
    console.log(cellName)
    console.log(cellValue)
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
    };
    const cellEditProp = {
      mode: 'dbclick',
      blurToSave: true,
      afterSaveCell: this.handleAfterSaveCell
    };
    return(
      <div>
      <h3 className="centerAlign">BsTodos</h3>
      { todoState.isFetching && <p>Loading BsTodos....</p> }
      { pocos && pocos.length <= 0 && !todoState.isFetching && <p>No BsTodos Available. Add A Todo to List here.</p> }
      { pocos && pocos.length > 0 && !todoState.isFetching &&
          <BootstrapTable 
            data={pocos} selectRow={this.selectRowProp} cellEdit={this.cellEditProp}
            fetchInfo={{dataTotalSize: pocos.resultsCount}}
            options={options} striped remote
            hover
            condensed
            pagination
            insertRow
            deleteRow 
            search exportCSV>
            <TableHeaderColumn hidden dataField="_id" isKey={ true } hiddenOnInsert > Id </TableHeaderColumn>
            <TableHeaderColumn editable={ { validator: this.pocoValidator } } dataField="name"> Name </TableHeaderColumn>
            <TableHeaderColumn editable={ { validator: this.pocoValidator } } dataField="comment"> Comment </TableHeaderColumn>
            <TableHeaderColumn dataField="created" hiddenOnInsert > Created Date </TableHeaderColumn>
            <TableHeaderColumn dataField="modified" hiddenOnInsert > Modification Date
            </TableHeaderColumn>
          </BootstrapTable>
    }
      </div>
    );
  }
}