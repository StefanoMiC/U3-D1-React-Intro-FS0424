// metodo nr.1 di import di file, tramite path relativo creato da webpack al momento dell'avvio dell'app.
// questo genera una variabile logo che forniremo come valore dinamico all'attributo src del tag img dentro alle graffe.
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FormGroup from "./components/FormGroup";
import ClassComponent from "./components/ClassComponent";

// Questo file contiene il nostro primo React Component, il principale: App.jsx (andrebbe rinominato da js a jsx)
// Qui dentro creeremo i nostri componenti personali, se saranno creati qua dentro verranno renderizzati (visualizzati) nella pagina all'interno di quel <div id="root"></div>

// Che cos'è un componente React? Nella sua forma più basilare, non è altro che... una semplicissima funzione!
// Che ha come unico vincolo quello di ritornare del codice valido in JSX!

// JSX è una sintassi SIMIL-HTML che permette l'inserimento di codice dinamico (JavaScript) direttamente in quello che sembrava essere solo HTML
// Ci permette di combinare struttura e logica assieme!!

// Principali differenze tra HTML e JSX:
// - class - diventa className (per evitare conflitti con la keyword class dei costruttori in js)
// - le immagini devono essere scritte con una sintassi di tag autoconclusivo:  <img /> (così come ogni altro tag autoconclusivo: input, br, hr...)
// - l'attributo per le label "for" diventa "htmlFor" <label htmlFor="nome_id"></label>

// tutto quello che non è un valore di stringa, in JSX, dovrà essere delimitato da graffe {}
// all'interno delle graffe è possibile anche interpretare qualsiasi valore dinamico

// Una Prop è un valore che passa da un contesto più esterno ad uno più interno
// è il modo che abbiamo per passare i dati da un componente all'altro
const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* la Prop si crea semplicemente come se fosse un attributo di un tag, in questo caso l'attributo di un Componente è di fatto la sua Prop */}
      <Header
        logo={logo}
        id="signup"
        labelTxt="Iscriviti qui"
        placeholder="email@gmail.com"
        className="App-header shadow"
        // style in questo caso non è già applicato al componente, è semplicemente un valore ad oggetto che stiamo inviando come
        // prop che troveremo internamente al componente come props.style
        style={{ backgroundColor: "#D26100", border: "2px solid black" }}
      />

      <FormGroup id="formName" labelTxt="Name" placeholder="Inserisci il tuo nome qui" />
      <FormGroup id="formSurname" labelTxt="Cognome" placeholder="Inserisci il tuo cognome qui" />
      <FormGroup id="formTel" labelTxt="Telefono" placeholder="+3937872172721" />

      <ClassComponent
        title="titolo dalle props"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate delectus, rem reiciendis molestiae hic sequi officia officiis minus eveniet
          voluptatum corrupti dolorum ut enim quae architecto dolorem alias distinctio ipsa?"
        btnTxt="Cliccami"
        btnStyle={{ backgroundColor: "black", color: "white", border: "none", padding: "0.25rem 1rem", borderRadius: "10px" }}
      />

      <ClassComponent
        title="ALTRO titolo dalle props"
        content="dolorum ut enim quae architecto dolorem alias distinctio ipsa?"
        btnTxt="Clicca ME"
        btnStyle={{ backgroundColor: "red", color: "white", border: "none", padding: "0.25rem 1rem", borderRadius: "10px" }}
      />
    </div>
  );
};

export default App;
