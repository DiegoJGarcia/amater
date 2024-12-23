import React, { FC } from 'react';
import './Match.scss';

type MatchProps = {
	name: string;
};

const Match: FC<MatchProps> = ({ name }) => {
	return (
		<div className="match">
			<div className="match_name labels">{name}</div>
		</div>
	);
};

export default Match;
