import { Component } from "react";

class Log_in extends Component {
  state = {
    name: "",
    password: "",
    select: "",
    range: "",
    date: "",
    radio: "",
    review: "",
  };
  render() {
    return (
      <>
        <div style={{ marginRight: "12px" }}>
          <label htmlFor="">Name : </label>
          <input
            style={{ padding: "6px", fontSize: "15px", marginLeft: "23px" }}
            placeholder="Name"
            type="text"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>

        <br />

        <div style={{ marginBottom: "18px" }}>
          <label htmlFor="">Password : </label>
          <input
            style={{ padding: "6px", fontSize: "15px" }}
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </div>

        <div style={{ marginRight: "38px", marginBottom: "18px" }}>
          <label>Gender : </label>
          <label htmlFor="" for="male">
            &nbsp; Male
          </label>
          <input
            type="radio"
            id="male"
            name="Gender"
            value={"Male"}
            onChange={(e) => {
              this.setState({ radio: e.target.value });
            }}
          />

          <label for="female"> Female</label>
          <input
            type="radio"
            id="female"
            name="Gender"
            value={"Female"}
            onChange={(e) => {
              this.setState({ radio: e.target.value });
            }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label>Hobbies : </label> &nbsp; Dancing &nbsp;
          <input type="checkbox" />
          &nbsp; Cricket &nbsp;
          <input type="checkbox" />
        </div>

        <div style={{ marginRight: "44px", marginBottom: "18px" }}>
          <label htmlFor="">Range : </label>
          <input
            placeholder="Range"
            type="range"
            value={this.state.range}
            onChange={(e) => {
              this.setState({ range: e.target.value });
            }}
          />
        </div>

        <div
          style={{
            marginRight: "39px",
            marginBottom: "18px",
          }}
        >
          <select
            style={{ padding: "6px", fontSize: "15px" }}
            value={this.state.range}
            onChange={(e) => {
              this.setState({ select: e.target.value });
            }}
          >
            <option value="City">City</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            <option value="Sehore">Sehore</option>
            <option value="Jabalpur">Jabalpur</option>
          </select>
        </div>

        <div style={{ marginBottom: "18px", marginRight: "65px" }}>
          <label style={{ marginRight: "112px" }}>Review : </label>
          <br />
          <textarea
            value={this.state.review}
            onChange={(e) => {
              this.setState({ review: e.target.value });
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "18px" }}>
          <input
            type="date"
            value={this.state.range}
            onChange={(e) => {
              this.setState({ date: e.target.value });
            }}
          />
        </div>

        <div>
          <div>
            <strong>Name : {this.state.name}</strong>
          </div>
          <br />
          <div>
            <strong>Range : {this.state.range}</strong>
          </div>
          <br />
          <div>
            <strong>City : {this.state.select}</strong>
          </div>
          <br />
          <div>
            <strong>Date : {this.state.date}</strong>
          </div>
          <br />
          <div>
            <strong>Password : {this.state.password}</strong>
          </div>
          <br />
          <div>
            <strong>Gender : {this.state.radio}</strong>
          </div>
          <br />
          <div>
            <strong>Review : {this.state.review}</strong>
          </div>
        </div>
      </>
    );
  }
}
export default Log_in;
