import React, { FC } from 'react';
import './Tournament.scss';

type TournamentProps = {
	name: string;
};

const Tournament: FC<TournamentProps> = ({ name }) => {
	return (
		<div className="tournament">
			<div className="tournament_name labels">{name}</div>
		</div>
	);
};

export default Tournament;
