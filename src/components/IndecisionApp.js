import React, { Component } from "react";

import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends Component {
  state = {
    subtitle: "Your life in the hands of a computer",
    options: [],
    isModalOpen: undefined
  };

  handleCloseModal = () => {
    this.setState(() => ({ isModalOpen: undefined }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(item => item !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];

    this.setState(() => ({ isModalOpen: selectedOption }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Input filed cannot be empty";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
    }
  }

  componentDidUpdate() {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem("options", json);
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              hasOptions={this.state.options.length > 0}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          isModalOpen={this.state.isModalOpen}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;
