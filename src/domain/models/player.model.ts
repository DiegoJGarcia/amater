import { commonId } from './common.model';
import { Match } from './match.model';
import { Rating } from './rating.model';
import { Team } from './team.model';

export type Player = {
	id: commonId;
	name: string;
	position: string;
	team: Team;
	matches: Match[];
	ratings: Rating[]; // Si decides implementar un sistema de calificaciones.
};
