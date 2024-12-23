import { commonId } from './common.model';
import { Rating } from './rating.model';
import { Team } from './team.model';

export type Pitch = {
	id: commonId;
	name: string;
	location: string;
	size: 'small' | 'medium' | 'large'; // O cualquier otra clasificación que necesites.
	surface: 'grass' | 'turf' | 'concrete'; // Tipo de superficie.
	ratings: Rating[]; // Calificaciones asociadas a esta cancha.
};
