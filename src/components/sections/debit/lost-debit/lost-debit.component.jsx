import React from "react";
import "./lost-debit.styles.scss";

import NormalFormInput from "../../../normal-form-input/normal-form-input.component";
import CustomButton from "../../../custom-button/custom-button.component";
import CleaveFormInput from "../../../cleave-form-input/cleave-form-input.component";

class LostDebit extends React.Component {
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
      <div className="lost">
        <h3 className="title">I have lost my debit/credit card.</h3>
        <span className="subtile">
          Search your credit/debit card with credit/debit number, name and
          expiry date.
        </span>
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
          />
          <h3 className="center">OR</h3>
          <NormalFormInput
            type="text"
            name="name"
            value={name}
            id="lname"
            handleChange={this.handleChange}
            label="Name on credit/debit card"
            maxLength="25"
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
          />
          <CustomButton type="submit">Search</CustomButton>
        </form>
      </div>
    );
  }
}

export default LostDebit;
