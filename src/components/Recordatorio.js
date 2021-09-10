import React, { Component } from "react";

class Recordatorio extends Component {
  render() {
    const { eleccionPrevia, historial } = this.props;

    return (
      <div className="recordatorio">
        <h3>Selección anterior: {eleccionPrevia}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
          {historial.length > 0
            ? historial.map((eleccion, index) => (
                <li key={index + "-" + eleccion}>{eleccion}</li>
              ))
            : ""}
        </ul>
      </div>
    );
  }
}

export default Recordatorio;
