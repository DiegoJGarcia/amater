import { commonId } from './common.model';

export type Rating = {
	id: commonId;
	score: number;
	comment?: string;
	ratedEntity: 'team' | 'player' | 'tournament' | 'referee' | 'pitch';
	entityId: commonId; // ID de la entidad calificada.
};
