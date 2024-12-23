import React, { FC } from 'react';
import './Player.scss';

type PlayerProps = {
	name: string;
};

const Player: FC<PlayerProps> = ({ name }) => {
	return (
		<div className="player">
			<div className="player_name labels">{name}</div>
		</div>
	);
};

export default Player;
