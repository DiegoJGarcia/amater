import './Team.scss';

import { useNavigate } from 'react-router-dom';

import Button from 'components/core/Button';
import { paths } from 'common/constants';
import Header from 'components/layout/Header';
import { useState } from 'react';
import { Player } from 'domain/models/player.model';
import useTeam from 'hooks/useTeam.hook';
import { Team } from 'domain/models/team.model';
import OneText from 'components/core/OneText';
import ButtonIcon from 'components/core/ButtonIcon';

function TeamView() {
	const navigate = useNavigate();
	const { team, updateTeam } = useTeam();
	const [teamLocal, setTeamLocal] = useState(team);

	const [adding, setAdding] = useState<boolean>(false);
	const [newPlayer, setNewPlayer] = useState<Player>({
		id: '',
		name: '',
	});

	const changeTeamName = (newName: string) => {
		const modifyTeam: Team = { ...teamLocal, name: newName };
		setTeamLocal(modifyTeam);
	};

	const addPlayer = (data: Player) => {
		const newPlayer: Player = { ...data, id: `Player_${teamLocal.players.length + 1}°` };
		const modifyPlayers: Player[] = [...teamLocal.players, newPlayer];
		setTeamLocal(team => ({ ...team, players: modifyPlayers }));
	};

	const removePLayer = (data: Player, index: number) => {
		// TODO [finish remove function]
		const newPlayer: Player = { ...data, id: `Player_${teamLocal.players.length + 1}°` };
		const modifyPlayers: Player[] = [...teamLocal.players, newPlayer];
		setTeamLocal(team => ({ ...team, players: modifyPlayers }));
	};

	const changeNewPlayer = (value: string, name: string) => {
		const modifyNewPlayer: Player = { ...newPlayer, [name]: value };
		setNewPlayer(modifyNewPlayer);
	};

	const changePlayer = (newPlayerName: string, name: string, index: number) => {
		const modifyPlayers: Player[] = teamLocal.players.splice(index, 1, {
			...teamLocal.players[index],
			name: newPlayerName,
		});
		setTeamLocal(team => ({ ...team, players: modifyPlayers }));
	};

	const saveTeam = () => {
		updateTeam(teamLocal);
	};

	return (
		<>
			<Header>
				<OneText
					className="team_name labels"
					name="name"
					placeholder="Nombre"
					value={teamLocal.name.toUpperCase()}
					onChange={value => changeTeamName(value)}
					max={30}
				/>
			</Header>
			<div className="team">
				<div className="team_players">
					{teamLocal.players.map((player: Player, index: number) => (
						<div key={player.id} className="team_players_row labels">
							<OneText
								className="team_players_name labels"
								name="name"
								placeholder="Nombre del jugador"
								value={player.name}
								onChange={(value, name) => changePlayer(value, name, index)}
								max={30}
							/>
							<ButtonIcon type="add" onClick={() => removePLayer(player, index)} />
						</div>
					))}
					{!adding ? (
						<Button onClick={() => setAdding(true)}>Add Player</Button>
					) : (
						<>
							<OneText
								className="team_players_name labels"
								name="name"
								placeholder="Nombre del jugador"
								value={newPlayer.name}
								onChange={changeNewPlayer}
								max={30}
							/>
							<Button
								onClick={() => {
									addPlayer(newPlayer);
									setAdding(false);
								}}
							>
								Add
							</Button>
						</>
					)}
					<Button onClick={() => saveTeam()}>Save</Button>
				</div>
				<Button onClick={() => navigate(paths.home)}>Atrás</Button>
			</div>
		</>
	);
}

export default TeamView;
