import React from "react";
import "./Header.css";

export default function Header({ title }) {
	return (
		<>
			<h1 className='header' title={title} data-testid='header-1'>
				{title}
			</h1>
			<h3 className='header'>Something Else</h3>
		</>
	);
}
