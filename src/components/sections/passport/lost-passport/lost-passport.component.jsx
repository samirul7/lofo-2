import React from "react";
import "./lost-passport.styles.scss";

import NormalFormInput from "../../../normal-form-input/normal-form-input.component";
import CleaveFormInput from "../../../cleave-form-input/cleave-form-input.component";
import CustomButton from "../../../custom-button/custom-button.component";

class LostPassport extends React.Component {
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
        <h3 className="title">I have lost my passport.</h3>
        <span className="subtile">
          Search your passport with passport number or name and date of birth.
        </span>
        <form onSubmit={this.handleSubmit}>
          <NormalFormInput
            type="text"
            name="passNo"
            value={passNo}
            id="lpassNo"
            maxLength="7"
            label="Passport No"
            handleChange={this.handleChange}
          />
          <h3 className="center">OR</h3>
          <NormalFormInput
            type="text"
            name="name"
            value={name}
            id="lname"
            maxLength="25"
            label="Name on passport"
            handleChange={this.handleChange}
          />
          <CleaveFormInput
            id="ldob"
            name="dob"
            placeholder="dd/mm/yyyy"
            options={{ date: true, datePattern: ["d", "m", "Y"] }}
            label="Date of birth"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Search</CustomButton>
        </form>
      </div>
    );
  }
}

export default LostPassport;
