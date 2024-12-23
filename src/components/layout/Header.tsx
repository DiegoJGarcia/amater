import React, { FC } from 'react';
import './Header.scss';

type HeaderProps = {
	label?: string;
	children?: any;
};

const Header: FC<HeaderProps> = ({ label, children }) => {
	return (
		<div className="header">
			<div className="header_title titles">{label}</div>
			<div className="header_child titles">{children}</div>
		</div>
	);
};

export default Header;
