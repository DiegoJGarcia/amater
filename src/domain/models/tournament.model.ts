import { commonId } from './common.model';
import { Calendar } from './calendar.model';
import { Match } from './match.model';
import { Team } from './team.model';

export type Tournament = {
	id: commonId;
	name: string;
	teams: Team[];
	matches: Match[];
	calendar: Calendar;
};
