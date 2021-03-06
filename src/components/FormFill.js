import React from "react";
import PropTypes from 'prop-types';
import FormText from "./FormText";
import dataFields from "./data/dataFields.json";
import FormImage from "./FormImage";

class FormFill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return dataFields.map((dataField, key) => {
      if (dataField.component === "FormText") {
        return (
          <FormText
            key={key}
            htmlFor={dataField.htmlFor}
            label={dataField.label}
            type={dataField.type}
            id={dataField.id}
            name={dataField.name}
            placeholder={dataField.placeholder}
            maxlenght={dataField.maxlenght}
            title={dataField.title}
            handleInput={this.props.handleInput}
            value={this.props.info[dataField.name]}
          />
        );
      } else {
        return (
          <FormImage
            key={key}
            htmlFor={dataField.htmlFor}
            label={dataField.label}
            type={dataField.type}
            id={dataField.id}
            name={dataField.name}
            accept={dataField.accept}
            handleInput={this.props.handleInput}
            photo={this.props.photo}
          />
        );
      }
    });
  }
}

FormFill.propTypes = {
  handleInput: PropTypes.func,
  info: PropTypes.object,
  photo: PropTypes.string,
}

export default FormFill;
