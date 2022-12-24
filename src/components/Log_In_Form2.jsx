import { Component } from "react";

class LogIn extends Component {
  state = {
    name: "",
    email: "",
    pass: "",
    textArea: "",
    rangeInput: "",
    myDate: "",
    choosenRadio: "",
    dropDown: "",
    checkBox1: "",
    checkBox2: "",
  };

  _handleInputChange = (e) => {
    const { value, name } = e.target;
    if (!name) {
      return;
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      name,
      pass,
      textArea,
      rangeInput,
      myDate,
      choosenRadio,
      dropDown,
      checkBox1,
      checkBox2,
    } = this.state;
    return (
      <>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            value={name}
            name="name"
            onChange={this._handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="pass">Pass</label>
          <input
            type="password"
            value={pass}
            name="pass"
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="TextArea">TextArea</label>
          <textarea
            name={"textArea"}
            rows={"4"}
            cols={"50"}
            value={textArea}
            onChange={this._handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="Range">Range</label>
          <input
            type={"range"}
            name={"rangeInput"}
            value={rangeInput}
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Date">Choose Date</label>
          <input
            type={"date"}
            name={"myDate"}
            value={myDate}
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <br />
          <label htmlFor="Male">Male</label>
          <input
            type={"radio"}
            name={"choosenRadio"}
            value={"Male"}
            onChange={this._handleInputChange}
          />
          <label htmlFor="Female">Female</label>
          <input
            type={"radio"}
            name={"choosenRadio"}
            value={"Female"}
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <select name={"dropDown"} onChange={this._handleInputChange}>
            <option value={"First"}>First</option>
            <option value={"Second"} selected>
              Second
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="milk">Milk</label>
          <input
            type={"checkbox"}
            name={"checkBox1"}
            value={"milk"}
            onChange={this._handleInputChange}
          />
          <label htmlFor="sugar">Sugar</label>
          <input
            type={"checkbox"}
            name={"checkBox2"}
            value={"sugar"}
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <p>Name:{name}</p>
          <p>Text-Area:{textArea}</p>
          <p>Pass:{pass}</p>
          <p>Range Value is:{rangeInput}</p>
          <p>Choosen Date:{myDate}</p>
          <p>Gender:{choosenRadio}</p>
          <p>Drowdown-Result:{dropDown}</p>
          <p>
            CheckBox Data:{checkBox1},{checkBox2}
          </p>
        </div>
      </>
    );
  }
}
export default LogIn;

//** Practice Self .

// import { Component } from "react";

// class SignIn extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   getValue = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <>
//         <div>
//           <input type="text" name="name" onChange={this.getValue} />
//         </div>

//         <div>
//           <input type="email" name="email" onChange={this.getValue} />
//         </div>

//         <div>
//           <input type="password" name="password" onChange={this.getValue} />
//         </div>

//         <div>
//           <p>Name : {name}</p>
//           <p>Email : {email}</p>
//           <p>Password : {password}</p>
//         </div>
//       </>
//     );
//   }
// }

// export default SignIn;
