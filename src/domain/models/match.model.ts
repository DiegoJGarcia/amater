import { commonId } from './common.model';
import { Pitch } from './pitch.model';
import { Team } from './team.model';

type MatchResult = {
	scoreTeamA: number;
	scoreTeamB: number;
	winner: Team | 'draw';
};

export type Match = {
	id: commonId;
	date: Date;
	pitch: Pitch; // Cancha donde se juega el partido.
	teamA: Team;
	teamB: Team;
	result?: MatchResult;
};
