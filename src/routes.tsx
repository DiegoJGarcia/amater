import React, { ReactElement, ReactNode } from 'react';

import { paths } from 'common/constants';

import Home from 'pages/Home';
import Team from 'pages/Team';
import Tournament from 'pages/Tournament';
import Calendar from 'pages/Calendar';

export interface IRoute {
	name: string;
	key: number;
	path: string;
	index?: boolean;
	element: ReactElement | ReactElement[] | ReactNode | ReactNode[];
	label?: string;
	subroutes?: IRoute[];
}

export const routes: IRoute[] = [
	{
		name: 'home',
		path: paths.home,
		key: 0,
		index: true,
		label: 'Home',
		element: <Home />,
	},
	{
		name: 'team',
		path: paths.team + '/:name',
		key: 1,
		index: true,
		label: 'Team',
		element: <Team />,
	},
	{
		name: 'tournament',
		path: paths.tournament + '/:name',
		key: 2,
		index: true,
		label: 'Tournament',
		element: <Tournament />,
	},
	{
		name: 'calendar',
		path: paths.calendar,
		key: 3,
		index: true,
		label: 'Calendar',
		element: <Calendar />,
	},
];
