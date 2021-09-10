import React, { Component } from "react";

class Opciones extends Component {
  handleSelected = (event) => {
    this.props.onChange(event.target.id);
  };

  render() {
    const { opcionA, opcionB } = this.props;
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="A" className="botones" onClick={this.handleSelected}>
            A
          </button>
          <h2>{opcionA}</h2>
        </div>
        <div className="opcion">
          <button id="B" className="botones" onClick={this.handleSelected}>
            B
          </button>
          <h2>{opcionB}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;
