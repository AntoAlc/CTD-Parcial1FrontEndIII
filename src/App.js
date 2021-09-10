import React, { Component } from "react";
import data from "./components/data.json";
import Opciones from "./components/Opciones";
import Recordatorio from "./components/Recordatorio";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

class App extends Component {
  state = {
    elecciones: [],
    eleccionActual: {},
    contador: 0,
    eleccionPrevia: "",
    historial: []
  };

  UNSAFE_componentWillMount() { //esta deprecado por eso el UNSAFE
    this.setState({
      elecciones: data,
      eleccionActual: data[0]
    });
  }

  handleSelected = (id) => {
    switch (this.state.eleccionActual.id) {
      case "1":
      case "2b":
      case "3b":
      case "4b":
        const num = id === "A" ? 1 : 2;
        this.state.historial.push(id);
        this.setState({
          contador: this.state.contador + num,
          eleccionPrevia: id
        });
        break;
      case "2a":
      case "3a":
      case "4a":
        const num2 = id === "A" ? 2 : 3;
        this.state.historial.push(id);
        this.setState({
          contador: this.state.contador + num2,
          eleccionPrevia: id
        });
        break;
      default:
        MySwal.fire({
          title:
            "<h6 style='color:black'>" +
            "¿Te gustaría empezar otra aventura?" +
            "</h6>",
          background: "url(https://sweetalert2.github.io/images/trees.png)",
          backdrop: `#000000`,
          height: 500,
          showDenyButton: true,
          confirmButtonText: "¡Hagámoslo!",
          denyButtonText: `¡Quizás la proxima!`,
          confirmButtonColor:`#41913F`


        }).then((result) => {
          if (result.isConfirmed) {
            this.setState({ contador: 0, eleccionPrevia: "", historial: [] });
          } else {
            MySwal.fire({
              title:
                "<h6 style='color:#F8F8F8'>" +
                "Nos vemos en la próxima aventura!" +
                "</h6>",
              imageUrl:
                "https://images.vexels.com/media/users/3/149524/isolated/preview/059ef5ac23f89494f3954f6f706197dc-ilustracion-de-tiroteo-de-fogata.png",
                imageWidth: 200,
              
              imageAlt: "A tall image",
              background:
                "url(https://img.freepik.com/vector-gratis/fondo-selva-plana_23-2148942208.jpg?size=626&ext=jpg)",
                backdrop: `#41913F`,
                confirmButtonColor:`#41913F`
              
            });
          }
        });
        break;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      this.setState({
        eleccionActual: this.state.elecciones[this.state.contador]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="layout">
          <h1 className="historia">{this.state.eleccionActual.historia}</h1>
          <Opciones
            opcionA={this.state.eleccionActual.opciones.a}
            opcionB={this.state.eleccionActual.opciones.b}
            onChange={this.handleSelected}
          />
          <Recordatorio
            eleccionPrevia={this.state.eleccionPrevia}
            historial={this.state.historial}
          />
        </div>
      </div>
    );
  }
}

export default App;
