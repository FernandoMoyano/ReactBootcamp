import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact";
import ComponentB from "./ComponentB";

const ComponentA = ({ contact }) => {
	return (
		<div>
			<h1>Nombre:{contact.Nombre}</h1>
			<h1>Apellido:{contact.Apellido}</h1>
			<h1>Email: {contact.Email}</h1>
			<ComponentB estado={false}/>
		</div>
	);
};
ComponentA.propTypes = {
	contact: PropTypes.instanceOf(Contact),
};
export default ComponentA;
