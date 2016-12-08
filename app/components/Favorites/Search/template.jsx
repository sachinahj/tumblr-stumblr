import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const template = (props) => {
  const {
    onSubmit,
  } = props;

  return (
    <form>
      <div className="row">
        <div className="col-xs">
          <TextField ref="blogIdentifier" floatingLabelText="Blog Name" fullWidth={true} defaultValue={"usatoday"} />
        </div>
        <div className="col-xs">
          <TextField ref="tag" floatingLabelText="Tag" fullWidth={true} />
        </div>
      </div>
      <div className="row flex-items-xs-right">
        <RaisedButton label="Search" primary={true} onClick={onSubmit} type="submit"/>
      </div>
    </form>
  );
};

export default template;
