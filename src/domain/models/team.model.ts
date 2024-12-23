import { commonId } from './common.model';
import { Player } from './player.model';
import { Tournament } from './tournament.model';

export type Team = {
	id: commonId;
	name: string;
	players: Player[];
	tournaments: Tournament[];
};
