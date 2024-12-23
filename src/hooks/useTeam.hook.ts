import { useState } from 'react';

import { Team } from 'domain/models/team.model';
import { cache } from 'common/container';

interface TeamResponse {
	team: Team;
	updateTeam: (newTeam: Team) => void;
}

const useTeam = (): TeamResponse => {
	const cachedTeam = cache.get('team');
	const defaultTeam = cachedTeam || {
		id: '',
		name: 'The team',
		players: [],
	};
	const [team, setTeam] = useState<Team>(defaultTeam as Team);

	const updateTeam = async (updatedTeam: Team) => {
		await cache.set('team', updatedTeam);
		await setTeam(updatedTeam);
		console.log('POWERS SAVED SUCCESSFULLY', updatedTeam);
	};

	return { team, updateTeam };
};

export default useTeam;
