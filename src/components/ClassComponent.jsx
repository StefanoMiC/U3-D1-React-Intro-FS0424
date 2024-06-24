import React from "react";

class ClassComponent extends React.Component {
  // render è un metodo OBBLIGATORIO quando usiamo un componente a Classe! (non basta solo il return!)
  // è grazie al render che possiamo avere il return di un elemento JSX al suo interno

  // il suo scopo è quello di venire chiamato in un momento preciso nel ciclo di vita del componente (dopo che il componente si è montato)
  // DEVE ritornare obbligatoriamente del JSX con le stesse caratteristiche degli altri componenti
  render() {
    console.log("THIS", this);
    console.log("PROPS", this.props);

    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
        <button style={this.props.btnStyle}>{this.props.btnTxt}</button>
      </div>
    );
  }
}

export default ClassComponent;
