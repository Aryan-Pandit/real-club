import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';

const generateRandomStats = (matchesPlayed) => {
  const passes = Math.floor(Math.random() * 501);
  const tackles = Math.floor(Math.random() * 101);
  const wins = Math.floor(Math.random() * (matchesPlayed + 1));
  const losses = Math.floor(Math.random() * (matchesPlayed - wins + 1));
  const ties = matchesPlayed - wins - losses;
  return { passes, tackles, wins, losses, ties };
};

const players = [
  { name: 'Kylian Mbappé', position: 'forward', goals: 44, assists: 10, matchesPlayed: 48, image: 'assets/kylian.png', rating: 95, comments: ["Great player!", "Best forward in the world!"] },
  { name: 'Vinicius Junior', position: 'forward', goals: 26, assists: 11, matchesPlayed: 46, image: 'assets/vinicius.jpg', rating: 94, comments: ["Amazing skills.", "Future legend."] },
  { name: 'Rodrygo', position: 'forward', goals: 17, assists: 9, matchesPlayed: 53, image: 'assets/rodrygo.png', rating: 92, comments: ["Impressive dribbling."] },
  { name: 'Jude Bellingham', position: 'midfielder', goals: 24, assists: 13, matchesPlayed: 45, image: 'assets/jude.png', rating: 96, comments: ["Strong midfield presence."] },
  { name: 'Aurélien Tchouaméni', position: 'midfielder', goals: 3, assists: 1, matchesPlayed: 40, image: 'assets/aurelien.png', rating: 94, comments: ["Solid defense."] },
  { name: 'Eduardo Camavinga', position: 'midfielder', goals: 0, assists: 4, matchesPlayed: 48, image: 'assets/camavinga.png', rating: 88, comments: ["Great potential."] },
  { name: 'David Alaba', position: 'defender', goals: 0, assists: 2, matchesPlayed: 17, image: 'assets/alaba.png', rating: 84, comments: ["Excellent defense."] },
  { name: 'Antonio Rüdiger', position: 'defender', goals: 2, assists: 3, matchesPlayed: 52, image: 'assets/rudiger.jpeg', rating: 96, comments: ["Strong and reliable."] },
  { name: 'Daniel Carvajal', position: 'defender', goals: 7, assists: 5, matchesPlayed: 43, image: 'assets/dani.jpg', rating: 89, comments: ["Quick and agile."] },
  { name: 'Ferland Mendy', position: 'defender', goals: 1, assists: 0, matchesPlayed: 37, image: 'assets/mendy.png', rating: 82, comments: ["Great defensive skills."] },
  { name: 'Thibaut Courtois', position: 'keeper', goals: 0, assists: 0, matchesPlayed: 5, image: 'assets/courtois.png', rating: 96, comments: ["Amazing goalkeeper."] }
].map(player => ({ ...player, ...generateRandomStats(player.matchesPlayed) }));

const StatsPage = () => {
  const initialComments = players.reduce((acc, player) => {
    acc[player.name] = player.comments;
    return acc;
  }, {});
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [selectedStatsTypes, setSelectedStatsTypes] = useState([]);
  const [comments] = useState(initialComments);
  const [userComments, setUserComments] = useState({});
  const [editingComment, setEditingComment] = useState(null);
  const [sortType, setSortType] = useState('featured');

  const handlePositionClick = (position) => {
    setSelectedPositions((prevSelectedPositions) => {
      if (prevSelectedPositions.includes(position)) {
        return prevSelectedPositions.filter((pos) => pos !== position);
      } else {
        return [...prevSelectedPositions, position];
      }
    });
  };

  const handleStatsTypeClick = (statsType) => {
    setSelectedStatsTypes((prevSelectedStatsTypes) => {
      if (prevSelectedStatsTypes.includes(statsType)) {
        return prevSelectedStatsTypes.filter((type) => type !== statsType);
      } else {
        return [...prevSelectedStatsTypes, statsType];
      }
    });
  };

  const handleAddComment = (playerName, comment) => {
    setUserComments(prevUserComments => ({
      ...prevUserComments,
      [playerName]: [...(prevUserComments[playerName] || []), comment]
    }));
  };

  const handleEditUserComment = (playerName, index, newComment) => {
    setUserComments(prevUserComments => ({
      ...prevUserComments,
      [playerName]: prevUserComments[playerName].map((comment, idx) =>
        idx === index ? newComment : comment
      )
    }));
    setEditingComment(null);
  };

  const handleDeleteUserComment = (playerName, index) => {
    setUserComments(prevUserComments => ({
      ...prevUserComments,
      [playerName]: prevUserComments[playerName].filter((_, idx) => idx !== index)
    }));
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handleResetFilters = () => {
    setSelectedPositions([]);
    setSelectedStatsTypes([]);
    setSortType('featured');
  };

  const sortedPlayers = [...players].sort((a, b) => {
    if (sortType === 'highest') {
      return b.rating - a.rating;
    } else if (sortType === 'lowest') {
      return a.rating - b.rating;
    } else {
      return players.indexOf(a) - players.indexOf(b);
    }
  });

  const filteredPlayers = sortedPlayers.filter(player => {
    if (selectedPositions.length > 0 && !selectedPositions.includes(player.position)) return false;
    return true;
  });

  const handleEditComment = (playerName, index, isUserComment = false) => {
    setEditingComment({ playerName, index, isUserComment });
  };

  

  return (
    <div>
      <Helmet>
        <title>Stats</title>
      </Helmet>
      <main className="stats-section">
        <h1>Stats</h1>
        <div className="sort-dropdown">
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortType} onChange={handleSortChange}>
            <option value="featured">Featured</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
          </select>
        </div>
        <div className="filters">
          <div className="filter-category">
            <h2>Position</h2>
            <button className={`filter-button ${selectedPositions.includes('forward') ? 'selected' : ''}`} onClick={() => handlePositionClick('forward')}>Forward</button>
            <button className={`filter-button ${selectedPositions.includes('midfielder') ? 'selected' : ''}`} onClick={() => handlePositionClick('midfielder')}>Midfielder</button>
            <button className={`filter-button ${selectedPositions.includes('defender') ? 'selected' : ''}`} onClick={() => handlePositionClick('defender')}>Defender</button>
            <button className={`filter-button ${selectedPositions.includes('keeper') ? 'selected' : ''}`} onClick={() => handlePositionClick('keeper')}>Keeper</button>
          </div>

          <div className="filter-category">
            <h2>Stats Type</h2>
            <button className={`filter-button ${selectedStatsTypes.includes('goals') ? 'selected' : ''}`} onClick={() => handleStatsTypeClick('goals')}>Goals</button>
            <button className={`filter-button ${selectedStatsTypes.includes('assists') ? 'selected' : ''}`} onClick={() => handleStatsTypeClick('assists')}>Assists</button>
            <button className={`filter-button ${selectedStatsTypes.includes('passes') ? 'selected' : ''}`} onClick={() => handleStatsTypeClick('passes')}>Passes</button>
            <button className={`filter-button ${selectedStatsTypes.includes('tackles') ? 'selected' : ''}`} onClick={() => handleStatsTypeClick('tackles')}>Tackles</button>
            <button className={`filter-button ${selectedStatsTypes.includes('matchesPlayed') ? 'selected' : ''}`} onClick={() => handleStatsTypeClick('matchesPlayed')}>Matches Played</button>
            <button className={`filter-button ${selectedStatsTypes.includes('wins') ? 'selected' : ''}`} onClick={() => handleStatsTypeClick('wins')}>Wins</button>
            <button className={`filter-button ${selectedStatsTypes.includes('losses') ? 'selected' : ''}`} onClick={() => handleStatsTypeClick('losses')}>Losses</button>
            <button className={`filter-button ${selectedStatsTypes.includes('ties') ? 'selected' : ''}`} onClick={() => handleStatsTypeClick('ties')}>Ties</button>
          </div>
        </div>
        <button className="reset-button" onClick={handleResetFilters}>Reset</button>

        <div className="players-container">
          {filteredPlayers.map((player, index) => (
            <div className="player-card" key={index}>
              <img src={player.image} alt={player.name} className="player-image" />
              <h3>{player.name}</h3>
              {selectedStatsTypes.includes('goals') && <p>Goals: {player.goals}</p>}
              {selectedStatsTypes.includes('assists') && <p>Assists: {player.assists}</p>}
              {selectedStatsTypes.includes('passes') && <p>Passes: {player.passes}</p>}
              {selectedStatsTypes.includes('tackles') && <p>Tackles: {player.tackles}</p>}
              {selectedStatsTypes.includes('matchesPlayed') && <p>Matches Played: {player.matchesPlayed}</p>}
              {selectedStatsTypes.includes('wins') && <p>Wins: {player.wins}</p>}
              {selectedStatsTypes.includes('losses') && <p>Losses: {player.losses}</p>}
              {selectedStatsTypes.includes('ties') && <p>Ties: {player.ties}</p>}
              <div className="comments-section">
                <h4>Comments</h4>
                <ul>
                  {comments[player.name]?.map((comment, idx) => (
                    <li key={`initial-${idx}`}>{comment}</li>
                  ))}
                  {userComments[player.name]?.map((comment, idx) => (
                    <li key={`user-${idx}`}>
                      {editingComment && editingComment.playerName === player.name && editingComment.index === idx ? (
                        <input
                          type="text"
                          defaultValue={comment}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleEditUserComment(player.name, idx, e.target.value);
                            }
                          }}
                        />
                      ) : (
                        <>
                          {comment}
                          <button onClick={() => handleEditComment(player.name, idx, true)}>Edit</button>
                          <button onClick={() => handleDeleteUserComment(player.name, idx)}>Delete</button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="Add a comment"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddComment(player.name, e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Real Club of Football. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StatsPage;
