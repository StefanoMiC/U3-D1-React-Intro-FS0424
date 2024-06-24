import React from "react";

class ClassComponent extends React.Component {
  // render è un metodo OBBLIGATORIO quando usiamo un componente a Classe!
  // è grazie al render che possiamo avere il return di un elemento JSX
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
