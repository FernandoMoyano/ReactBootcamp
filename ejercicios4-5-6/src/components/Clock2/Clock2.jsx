import React, { useEffect, useState } from "react";

const Clock2 = () => {
	const initialState = {
		fecha: new Date(),
		edad: 0,
		nombre: "Martín",
		apellido: "Moyano",
	};

	const [user, setUser] = useState(initialState);

	useEffect(() => {
		const intervalAge = setInterval(() => {
			updateUser();
		},1000);
		return () => {
			clearInterval(intervalAge);
		};
	});

	const updateUser = () => {
		return setUser({
			fecha: new Date(),
			edad: user.edad + 1,
			nomnbre: user.nombre,
			apellido: user.apellido,
		});
	};

	return (
		<div>
    	<h3>
				Ususario: {user.nombre} {user.apellido}
			</h3>
			<h3>Hora Actual: {user.fecha.toLocaleTimeString()}</h3>
			<h3>Edad: {user.edad}</h3>
		</div>
	);
};

export default Clock2;
