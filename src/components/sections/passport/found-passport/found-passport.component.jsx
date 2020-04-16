import React from "react";
import "./found-passport.styles.scss";

import NormalFormInput from "../../../normal-form-input/normal-form-input.component";
import CleaveFormInput from "../../../cleave-form-input/cleave-form-input.component";
import CustomButton from "../../../custom-button/custom-button.component";

class FoundPassport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passNo: "",
      name: "",
      dob: "",
    };
  }

  handleChange = (event) => {
    const { name, value, rawValue } = event.target;
    let actualValue = value;
    if (name === "passNo") {
      actualValue = value.toUpperCase();
    } else if (name === "dob") {
      actualValue = rawValue;
    }
    this.setState({
      [name]: actualValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // backend job
  };

  render() {
    const { passNo, name } = this.state;
    return (
      <div className="lost">
        <h3 className="title">I found a passport.</h3>
        <span className="subtile">
          Fill Passport number, name and date of birth.
        </span>
        <form onSubmit={this.handleSubmit}>
          <NormalFormInput
            type="text"
            name="passNo"
            value={passNo}
            id="fpassNo"
            maxLength="7"
            label="Passport No"
            handleChange={this.handleChange}
            required
          />
          <NormalFormInput
            type="text"
            name="name"
            value={name}
            id="fname"
            maxLength="25"
            label="Name on passport"
            handleChange={this.handleChange}
            required
          />
          <CleaveFormInput
            id="fdob"
            name="dob"
            placeholder="dd/mm/yyyy"
            options={{ date: true, datePattern: ["d", "m", "Y"] }}
            label="Date of birth"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Search</CustomButton>
        </form>
      </div>
    );
  }
}

export default FoundPassport;
