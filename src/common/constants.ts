export enum paths {
	home = '/',
	team = '/equipo',
	tournament = '/torneo',
	calendar = '/fechas',
}

export const regex = {
	numeric: new RegExp('^[0-9]+$'),
};

export enum CardStatus {
	new = 'new',
	editing = 'editing',
	error = 'error',
}
