import React from "react";

class Contact extends React.Component {
   // Setting the component's initial state
   state = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
  
    
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

    if (!this.state.firstName || !this.state.lastName) {
      alert("Enter your full name please");
    
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      contact: ""
    });
  };
  
  
  
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={this.state.contact}
            name="contact"
            onChange={this.handleInputChange}
            type="text"
            placeholder="contact number"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Contact;
