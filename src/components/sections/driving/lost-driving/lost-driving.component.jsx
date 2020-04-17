import React from "react";
import "./lost-driving.styles.scss";

import CleaveFormInput from "../../../cleave-form-input/cleave-form-input.component";
import NormalFormInput from "../../../normal-form-input/normal-form-input.component";
import CustomButton from "../../../custom-button/custom-button.component";

class LostDriving extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dlNo: "",
      name: "",
      dob: "",
    };
  }

  handleChange = (event) => {
    const { name, value, rawValue } = event.target;
    let actualValue = value;

    if (name === "dlNo") {
      actualValue = rawValue.toUpperCase();
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
    const { name } = this.state;
    return (
      <div className="lost">
        <h3 className="title">I have lost my driving license.</h3>
        <span className="subtile">
          Search your driving license with driving license number or name and
          date of birth.
        </span>
        <form onSubmit={this.handleSubmit} className="lost-form">
          <CleaveFormInput
            options={{
              blocks: [2, 2, 4, 7],
              delimiter: "-",
              capitalizeFirst: true,
            }}
            handleChange={this.handleChange}
            name="dlNo"
            id="ldlNo"
            label="Driving License No"
            required
          />
          <h3 className="center">OR</h3>
          <NormalFormInput
            type="text"
            name="name"
            value={name}
            id="lname"
            handleChange={this.handleChange}
            label="Name on driving license"
            maxLength="25"
            required
          />
          <CleaveFormInput
            name="dob"
            id="ldob"
            placeholder="dd/mm/yyyy"
            handleChange={this.handleChange}
            label="Date of birth"
            options={{
              date: true,
            }}
            required
          />
          <CustomButton type="submit">Search</CustomButton>
        </form>
      </div>
    );
  }
}

export default LostDriving;
