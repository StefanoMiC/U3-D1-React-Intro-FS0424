// un componente React deve SEMPRE chiamarsi con la lettera maiuscola! sia dentro che fuori dal file.
// un componente dovrà essere SEMPRE:

// - ✅ esportato
// - ✅ avere un return
// - ✅ avere un singolo elemento JSX ritornato!

const FormGroup = props => {
  console.log("FORMGROUP PROPS", props);
  return (
    <>
      <label htmlFor={props.id}>{props.labelTxt}</label>
      <input type="text" id={props.id} placeholder={props.placeholder} />
    </>
  );
};

export default FormGroup;
