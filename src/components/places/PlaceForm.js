import React from "react";
import { Field, reduxForm } from "redux-form";


class PlaceForm extends React.Component {
  renderField = ({ input, label, meta }) => {
    const error = meta.touched ? meta.error : null;
    const className = `field ${error ? "error" : null}`;
    return (
      <div className={className}>
        <label> {label} </label>
        <input {...input} autoComplete="off" />
        <div style={{ color: "red" }}>{error}</div>
      </div>
    );
  };

  onFormSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        {/* // this.onFromSubmit wiil be called with form values as arguments on clicking submit buttons; */}
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
          <Field
            name="title"
            component={this.renderField}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderField}
            label="Enter Description"
          />
          <button className="ui button primary"> Submit </button>
        </form>
      </div>
    );
  }
}

// reduxForm will uses this function to validate form values every time user takes an action, it will return an object;
// if form values are valid then returne an empty object, reduxForm will see returned object is empty and think form values are valid;
// if some value is invalid then return an object contaning key-value pair with key as the name of invalid field and value as the error;
// this way reduxForm will know there is something wrong with a particular field value and add that error to meta property of that field;
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) errors.title = "You must enter a title";
  if (!formValues.description)
    errors.description = "You must enter a description";
  return errors;
};

export default reduxForm({
  form: "placeCreate", // name of form;
  validate: validate, // wiring up validate finction with reduxForm;
})(PlaceForm);
