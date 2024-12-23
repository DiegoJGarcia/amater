import { commonId } from './common.model';
import { Match } from './match.model';

export type Calendar = {
	id: commonId;
	matches: Match[];
};
