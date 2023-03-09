import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import Clock from "../ejercicios4-5-6/src/components/Clock/Clock";

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
				<Clock />
			</header>
		</div>
	);
}

export default App;
