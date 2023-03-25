import { useState } from 'react';
import './Calendar.scss';

import { useNavigate } from 'react-router-dom';

import Button from 'components/core/Button';
import { paths } from 'common/constants';
import Header from 'components/layout/Header';

function Calendar() {
	const navigate = useNavigate();

	const [title] = useState('calendar');

	return (
		<div className="calendar">
			<Header label={title.toUpperCase()} />
			<Button onClick={() => navigate(paths.home)}>Atrás</Button>
		</div>
	);
}

export default Calendar;
