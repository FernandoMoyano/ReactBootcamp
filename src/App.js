import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";

function App() {
	const contactPrueba = {
		nombre: "Fernando",
		apellido: "Moyano",
		email: "fernandomoyano21@gmail.com",
		conectado: false,
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<ComponentA contact={contactPrueba} />
			</header>
		</div>
	);
}

export default App;
