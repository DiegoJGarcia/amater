import { useState } from 'react';
import './Home.scss';

import { paths } from 'common/constants';
import { useNavigate } from 'react-router-dom';
import Button from 'components/core/Button';
import { makeQuery } from 'common/helpers';
import Header from 'components/layout/Header';

function Home() {
	const navigate = useNavigate();
	const [title] = useState('home');
	const [team] = useState({
		name: 'William-Wallace',
	});
	const [tournament] = useState({
		quilmes: 'Quilmes',
		sanidad: 'Sanidad',
	});

	return (
		<div className="home">
			<Header label={title.toUpperCase()} />
			<Button onClick={() => navigate(`${paths.tournament}/${makeQuery(tournament.quilmes)}`)}>
				Quilmes
			</Button>
			<Button onClick={() => navigate(`${paths.tournament}/${makeQuery(tournament.sanidad)}`)}>
				Sanidad
			</Button>
			<Button onClick={() => navigate(`${paths.team}/${makeQuery(team.name)}`)}>Equipo</Button>
			<Button onClick={() => navigate(paths.calendar)}>Fechas</Button>
		</div>
	);
}

export default Home;
