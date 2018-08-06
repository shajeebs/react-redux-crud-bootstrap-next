import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './Common/TextInput';

const TodoEditForm = (props) => {
  return (
     <form>
        <TextInput name="name" label="Name" value={props.pocoToEdit ? props.pocoToEdit.name: ""} onChange={props.onChange}/>
        <TextInput name="comment" label="Comment" value={props.pocoToEdit ? props.pocoToEdit.comment: ""} onChange={props.onChange}/>
 
        <input type="submit" disabled={props.saving}
            value={props.saving ? 'Saving...' : 'Save'} className="btn btn-primary" onClick={props.onSave}/>       
    </form>
  );
}

TodoEditForm.propTypes = {
  pocoToEdit: PropTypes.object.isRequired,
  //hobbies: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  // onHobbyChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default TodoEditForm;