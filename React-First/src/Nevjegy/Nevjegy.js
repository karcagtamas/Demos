import React, { Component } from "react";
import axios from "axios";

export class Nevjegy extends Component {
  state = {
    onModify: false
  };

  render() {
    return (
      <div className="p-2 col col-4">
        <div className="border rounded p-2">
          <div style={{ float: "right" }}>
            {!this.state.onModify ? (
              <div>
                <button className="btn" onClick={this.deleteClick}>
                  <span role="img" aria-label="Del">
                    &#9940;
                  </span>
                </button>
                <button className="btn" onClick={this.modositClick}>
                  &#9998;
                </button>
              </div>
            ) : (
              <div>
                <button className="btn" onClick={this.mentesClick}>
                  &#10004;
                </button>
                <button className="btn" onClick={this.megsemClick}>
                  <span role="img" aria-label="Cross">
                    &#10060;
                  </span>
                </button>
              </div>
            )}
          </div>
          <h1>{this.props.Model.nev}</h1>
          {this.state.onModify ? (
            <div className="form-group">
              <label>Beosztás:</label>
              <input
                id="beosztas"
                type="text"
                defaultValue={this.props.Model.beosztas}
                className="form-control"
              />
            </div>
          ) : (
            <h2>{this.props.Model.beosztas}</h2>
          )}

          {this.state.onModify ? (
            <div className="form-group">
              <label>Telefon:</label>
              <input
                id="telefon"
                type="text"
                defaultValue={this.props.Model.telefon}
                className="form-control"
              />
            </div>
          ) : (
            <p>{this.props.Model.telefon}</p>
          )}

          {this.state.onModify ? (
            <div className="form-group">
              <label>E-mail:</label>
              <input
                id="email"
                type="text"
                defaultValue={this.props.Model.email}
                className="form-control"
              />
            </div>
          ) : (
            <p>{this.props.Model.email}</p>
          )}
        </div>
      </div>
    );
  }

  modositClick = () => {
    this.setState(state => ({
      onModify: true
    }));
  };
  megsemClick = () => {
    this.setState(state => ({
      onModify: false
    }));
  };

  deleteClick = () => {
    this.props.onDelete(this.props.Model);
  };

  mentesClick = () => {
    const model = {
      nev: this.props.Model.nev,
      beosztas: document.getElementById("beosztas").value,
      telefon: document.getElementById("telefon").value,
      email: document.getElementById("email").value
    };
    axios.put("http://c103-21:8103/api/nevjegy", model).then(res => {
      this.setState({ onModify: false });
    });
    this.props.onChange(model);
  };
}

export default Nevjegy;
