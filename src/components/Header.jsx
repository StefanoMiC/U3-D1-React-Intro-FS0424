// un componente React deve SEMPRE chiamarsi con la lettera maiuscola! sia dentro che fuori dal file.
// un componente dovrà essere SEMPRE:

import FormGroup from "./FormGroup";

// - ✅ esportato
// - ✅ avere un return
// - ✅ avere un singolo elemento JSX ritornato!

// function Header() {
//   return (
//     <div>
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}

//         {/* un'altra modalità di inserimento di un'immagine:
//           sfruttando la cartella public prevendendo che sia effettivamente la cartella principale del progetto una volta avviato */}
//         <img src="./assets/img/photo-17.avif" alt="orange porsche" width="100%" />

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//       <p>elemento extra</p>
//     </div>
//   );
// }

// Si può evitare un div extra, nel caso in cui serva solo come metodo per ritornare un unico elemento dal nostro componente,
// utilizzando il cosiddetto FRAGMENT: <></>
// il fragment non si renderizzerà, ma farà comunque da contenitore per due o più altri elementi jsx,
// che in questo caso possono essere ritornati come unico gruppo

// questo componente riceve un oggetto di Props al cui interno ci saranno le coppie chiave-valore corrispondenti
// agli attributi-valore che abbiamo applicato al tag nel contesto più esterno
// una Prop ha sempre una direzione dall'alto verso il basso, dal componente padre al componente figlio!
function Header(props) {
  console.log("HEADER PROPS", props);

  return (
    <>
      <header className={props.className} style={props.style}>
        {/* questo valore ci arriva da una Prop chiamata logo */}
        <img src={props.logo} className="App-logo" alt="logo" />

        {/* un'altra modalità di inserimento di un'immagine:
          sfruttando la cartella public prevendendo che sia effettivamente la cartella principale del progetto una volta avviato */}
        <img src="./assets/img/photo-17.avif" alt="orange porsche" width="100%" />

        <p style={{ backgroundColor: "#ebebeb", color: "purple" }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <FormGroup id={props.id} labelTxt={props.labelTxt} placeholder={props.placeholder} />

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <p>elemento extra di Header</p>
    </>
  );
}

export default Header;
