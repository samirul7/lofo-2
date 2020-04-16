import React from "react";
import "./found-pan.styles.scss";

import NormalFormInput from "../../../normal-form-input/normal-form-input.component";
import CleaveFormInput from "../../../cleave-form-input/cleave-form-input.component";
import CustomButton from "../../../custom-button/custom-button.component";

class FoundPan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panNo: "",
      name: "",
      dob: "",
    };
  }

  handleChange = (event) => {
    const { name, value, rawValue } = event.target;
    let actualValue = value;
    if (name === "dob") {
      actualValue = rawValue;
    }
    if (name === "panNo") {
      actualValue = actualValue.toUpperCase();
    }
    this.setState({
      [name]: actualValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Backend job
  };

  render() {
    const { panNo, name } = this.state;
    return (
      <div className="found">
        <h3 className="title">I found a pan card</h3>
        <span className="subtitle">
          Fill pan number, name and date of birth
        </span>
        <form onSubmit={this.handleSubmit}>
          <NormalFormInput
            type="text"
            name="panNo"
            value={panNo}
            id="fpanNo"
            handleChange={this.handleChange}
            label="Pan No"
            maxLength="10"
            required
          />
          <NormalFormInput
            type="text"
            name="name"
            value={name}
            id="fname"
            handleChange={this.handleChange}
            label="Name on pan"
            maxLength="25"
            required
          />
          <CleaveFormInput
            name="dob"
            id="fdob"
            placeholder="dd/mm/yyyy"
            handleChange={this.handleChange}
            label="Date of birth"
            options={{
              date: true,
            }}
            required
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    );
  }
}

export default FoundPan;
