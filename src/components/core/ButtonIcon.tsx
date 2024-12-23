import React, { FC } from 'react';
import './ButtonIcon.scss';

import button_icon from 'assets/button_icon.svg';

type ButtonIconProps = {
	label?: string;
	icon?: string;
	type?: 'add' | 'remove';
	onClick: () => void;
	disabled?: boolean;
	className?: string;
};

const ButtonIcon: FC<ButtonIconProps> = ({
	icon,
	label,
	onClick,
	disabled,
	className,
	type = 'add',
}) => {
	return (
		<button
			className={`button_icon ${type ? `button_icon--${type}` : ''} codes ${
				className ? `${className}` : ''
			}`}
			onClick={onClick}
			disabled={disabled}
		>
			{icon || label || <img src={button_icon} alt="button_icon-button" />}
		</button>
	);
};

export default ButtonIcon;
