﻿import React, { Component } from "react";
import PropTypes from "prop-types";

class EditTodo extends Component {
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.editing && !this.props.addNewTodo) {
      if (this.input.value !== "" && this.input.value.length >= 5) {
        this.props.editTodo(
          this.props.displayName,
          this.props.id,
          this.input.value
        );
      } else if (this.input.value !== "" || this.input.value.length < 5) {
        this.message.textContent = "Less than 5 characters";
      }
    } else {
      if (this.input.value !== "" && this.input.value.length >= 5) {
        this.props.addTodo(this.props.displayName, this.input.value);
        this.input.value = "";
        this.message.textContent = "";
      } else if (this.input.value !== "" && this.input.value.length < 5) {
        this.message.textContent = "Less than 5 characters";
      } else {
        this.message.textContent = "";
      }
    }
  };

  componentDidMount = () => {
    if (this.props.editing && !this.props.addNewTodo) {
      this.input.value = this.props.value;
      this.input.focus();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "inline" }}>
        <input
          type="text"
          ref={input => (this.input = input)}
          onBlur={this.handleSubmit}
          placeholder="Add New Todo"
        />
        {" "}{" "}
        <span ref={span => (this.message = span)} />
        <input type="submit" hidden />
      </form>
    );
  }
}

EditTodo.propTypes = {
  value: PropTypes.string,
  displayName: PropTypes.string,
  editing: PropTypes.bool,
  addNewTodo: PropTypes.bool,
  addTodo: PropTypes.func,
  editTodo: PropTypes.func,
  id: PropTypes.string
};

export default EditTodo;
