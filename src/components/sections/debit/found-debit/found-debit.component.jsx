import React from "react";
import "./found-debit.styles.scss";

import NormalFormInput from "../../../normal-form-input/normal-form-input.component";
import CustomButton from "../../../custom-button/custom-button.component";
import CleaveFormInput from "../../../cleave-form-input/cleave-form-input.component";

class FoundDebit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dNo: "",
      name: "",
      mmyy: "",
    };
  }

  handleChange = (event) => {
    const { name, value, rawValue } = event.target;
    let actualValue = value;
    if (name === "dNo" || name === "mmyy") {
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
      <div className="found">
        <h3 className="title">I found a debit/credit card.</h3>
        <span className="subtile">Fill credit/debit card details below.</span>
        <form onSubmit={this.handleSubmit} className="lost-form">
          <CleaveFormInput
            options={{
              blocks: [4, 4, 4, 4],
              delimiter: " ",
              numericOnly: true,
            }}
            handleChange={this.handleChange}
            name="dNO"
            id="ldNo"
            label="Credit/Debit card No"
            required
          />
          <NormalFormInput
            type="text"
            name="name"
            value={name}
            id="lname"
            handleChange={this.handleChange}
            label="Name on credit/debit card"
            maxLength="25"
            required
          />
          <CleaveFormInput
            name="mmyy"
            id="lmmyy"
            placeholder="mm/yy"
            handleChange={this.handleChange}
            label="Valid Thru"
            options={{
              date: true,
              datePattern: ["m", "y"],
            }}
            required
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    );
  }
}

export default FoundDebit;
