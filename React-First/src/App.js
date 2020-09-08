import React, { Component } from "react";
import "./App.css";
import Nevjegy from "./Nevjegy/Nevjegy";
// import ReactDOM from "react-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    models: []
  };

  constructor() {
    super();
    axios.get("http://c103-21:8103/api/nevjegy").then(res => {
      this.setState({ models: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="border rounded m-2 p-2">
          <h1 className="text-center">Új névjegykártya</h1>
          <div className="form-group">
            <label>Név:</label>
            <input id="NewNev" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Beosztás:</label>
            <input id="NewBeosztas" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Telefon:</label>
            <input id="NewTelefon" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input id="NewEmail" type="text" className="form-control" />
          </div>
          <button onClick={() => this.add()} className="btn btn-primary">
            Mentés
          </button>
        </div>
        <div id="nevjegyek" className="row col-12" style={{ margin: 0 }}>
          {this.state.models.map(model => (
            <Nevjegy
              key={model.nev}
              Model={model}
              onChange={model => this.onChange(model)}
              onDelete={model => this.onDelete(model)}
            />
          ))}
        </div>
      </React.Fragment>
    );
    /* axios.get("http://c103-21:8103/api/nevjegy").then(res => {
      ReactDOM.render(
        this.state.models.map(n => (
          <Nevjegy Model={n} onChange={model => this.onChange(model)} />
        )),
        document.getElementById("nevjegyek")
      );
    }); */
    //return <div id="nevjegyek" />;
  }

  add = () => {
    let model = {
      nev: document.getElementById("NewNev").value,
      beosztas: document.getElementById("NewBeosztas").value,
      telefon: document.getElementById("NewTelefon").value,
      email: document.getElementById("NewEmail").value
    };
    if (model.nev !== "") {
      axios.post("http://c103-21:8103/api/nevjegy", model);
      let models = this.state.models;
      models.push(model);
      this.setState({ models });
    }
  };

  onChange(model) {
    let models = this.state.models;
    let index = models.findIndex(x => x.nev === model.nev);
    models[index] = model;
    this.setState({ models });
  }

  onDelete(model) {
    let models = this.state.models.filter(x => x !== model);
    this.setState({ models });
    axios.delete("http://c103-21:8103/api/nevjegy", { data: model });
  }
}

export default App;
