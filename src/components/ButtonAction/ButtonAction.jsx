import React from "react";
import Textarea from "react-textarea-autosize";
import "./ButtonAction.scss";
import Button from "@mui/material/Button";
import Icon from "@mui/icons-material/Close";
import { addList, addCard } from "../../services/redux/action.js";
import { connect } from "react-redux";

class ButtonAction extends React.Component {

  //Creamos un componente reutilizable que nos permite abrir y cerrar el formulario segun su estado

  state = {
    formOpen: false,
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false,
      text: ''
    });
  };

        // Guardamos el valor del formulario

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

        //Añadimos una lista o trajeta

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addList(text));
    }
  };

        //Añadimos una carta o tarea

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addCard(listID, text));
    }
  };

        //Creamos condicionales para añadir texto y estilos segun sea una tarjeta o una tarea

  rendAddButton = () => {
    const { list } = this.props;
    const textButton = list ? " + Añada otra tarjeta" : " + Añada otra tarea";
    const plusButton = list ? "plusTarjeta" : "plusTarea";

    return (
      <div className="container-button">
        <div className="textAdd" onClick={this.openForm}>
          <p className={plusButton}>{textButton}</p>
        </div>
      </div>
    );
  };

        // Creamos condicionales para el textArea segun sea una tarjeta o una tarea

  rendForm = () => {
    const { list } = this.props;
    const addTextArea = list ? "tarjetaAreaText" : "tareaAreaText";

      // Creamos la vista con el formulario y los botones para añadir o cerrar el formulario

    return (
      <div>
        <div className="container-area">
          <Textarea
            className={addTextArea}
            placeholder={
              list
                ? "Ponga el nombre de su tarjeta"
                : "Ponga el título de su tarea"
            }
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>
        <div className="container-button"> 
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            className="buttonAdd"
          >
            {list ? "Añadir tarjeta" : "Añadir Tarea"}
          </Button>
          <Icon 
            className="closeIcon"
            onClick ={this.closeForm}
            >
            Close
          </Icon>
        </div>
      </div>
    );
  };

      //Mostramos un contenido u otro segun el estado de formOpen

  render() {
    return this.state.formOpen ? this.rendForm() : this.rendAddButton();
  }
}

export default connect()(ButtonAction);
