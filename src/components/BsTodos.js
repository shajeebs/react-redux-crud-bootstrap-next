import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table-next';

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
    this.handleAfterSaveCell = this.handleAfterSaveCell.bind(this);
    
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
  }

  handleAfterSaveCell(row, cellName, cellValue) {
    row[cellName] = cellValue;
    if(row && row._id) { this.props.mappedEditPoco(row); }
  }


  render(){
    const currentPocoState = this.props.mappedPocoState;
    const pocos = currentPocoState.pocos;
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
      afterSaveCell: this.handleAfterSaveCell,
      //beforeSaveCell: this.beforeSaveCell
    };
    return(
      <div> hello this is Bootstrap Table page
      <h3 className="centerAlign">BsTodos</h3>
      { currentPocoState.isFetching && <p>Loading BsTodos....</p> }
      { pocos && pocos.length <= 0 && !currentPocoState.isFetching && <p>No BsTodos Available. Add A Todo to List here.</p> }
      { pocos && pocos.length > 0 && !currentPocoState.isFetching &&
          <BootstrapTable 
            data={pocos} selectRow={this.selectRowProp} cellEdit={cellEditProp}
            fetchInfo={{dataTotalSize: pocos.resultsCount}}
            options={options} striped remote
            pagination
            insertRow
            deleteRow 
            search exportCSV>
            <TableHeaderColumn hidden dataField="_id" isKey={ true } hiddenOnInsert > Id </TableHeaderColumn>
            <TableHeaderColumn editable={ { validator: this.pocoValidator } } dataField="name"> Name </TableHeaderColumn>
            <TableHeaderColumn editable={ { validator: this.pocoValidator } } dataField="comment"> Comment </TableHeaderColumn>
            <TableHeaderColumn dataField="created" hiddenOnInsert editable={ false }> Created Date </TableHeaderColumn>
            <TableHeaderColumn dataField="modified" hiddenOnInsert editable={ false }> Modification Date
            </TableHeaderColumn>
          </BootstrapTable>
    }
      </div>
    );
  }
}