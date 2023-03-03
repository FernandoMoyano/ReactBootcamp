import React, { useState } from "react";
import PropTypes from "prop-types";


const ComponentB = (estado) => {
	
	const [conectado, setCoenctado] = useState(estado);

	return (
		<div>
			<h3>
				{conectado === false
					? "Contacto no disponible"
					: "Contacto en linea"}
			</h3>
			<button onClick={() => setCoenctado(!conectado)}>
				{conectado === false ? "Conectado" : "Desconectado"}
			</button>
		</div>
	);
};
ComponentB.propTypes = {
	estado: PropTypes.bool,
};
export default ComponentB;
