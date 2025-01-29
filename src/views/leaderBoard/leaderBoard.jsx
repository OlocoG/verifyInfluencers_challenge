import { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [filter, setFilter] = useState('All');

  const influencers = [
    { rank: 1, name: 'Dr. Peter Attia', category: 'Medicine', trustScore: '94%', trend: '↑', followers: '1.2M+', verifiedClaims: 203 },
    { rank: 2, name: 'Dr. Rhonda Patrick', category: 'Nutrition', trustScore: '91%', trend: '↑', followers: '980K+', verifiedClaims: 156 },
    { rank: 3, name: 'Dr. Chris Palmer', category: 'Mental Health', trustScore: '90%', trend: '↑', followers: '180K+', verifiedClaims: 76 },
    { rank: 4, name: 'Andrew Huberman', category: 'Neuroscience', trustScore: '88%', trend: '↑', followers: '4.2M+', verifiedClaims: 127 },
    { rank: 5, name: 'Dr. Dominic D\'Agostino', category: 'Nutrition', trustScore: '89%', trend: '↑', followers: '250K+', verifiedClaims: 112 },
    { rank: 6, name: 'Dr. Gabrielle Lyon', category: 'Medicine', trustScore: '86%', trend: '↑', followers: '380K+', verifiedClaims: 84 },
    { rank: 7, name: 'Dr. David Sinclair', category: 'Longevity', trustScore: '87%', trend: '↑', followers: '1.1M+', verifiedClaims: 145 },
  ];

  const categories = ['All', 'Nutrition', 'Fitness', 'Medicine', 'Mental Health', 'Neuroscience', 'Longevity'];

  const filteredInfluencers = filter === 'All' 
    ? influencers 
    : influencers.filter(influencer => influencer.category === filter);

  return (
    <div className="leaderboard">
      <h1>Influencer Trust Leaderboard</h1>
      <p>Real-time rankings of health influencers based on scientific accuracy, credibility, and transparency. Updated daily using AI-powered analysis.</p>
      
      <div className="stats">
        <div className="stat">
          <h2>1,234</h2>
          <p>Active Influencers</p>
        </div>
        <div className="stat">
          <h2>25,431</h2>
          <p>Claims Verified</p>
        </div>
        <div className="stat">
          <h2>85.7%</h2>
          <p>Average Trust Score</p>
        </div>
      </div>

      <div className="filters">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select 
          id="category-filter" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>RANK</th>
            <th>INFLUENCER</th>
            <th>CATEGORY</th>
            <th>TRUST SCORE</th>
            <th>TREND</th>
            <th>FOLLOWERS</th>
            <th>VERIFIED CLAIMS</th>
          </tr>
        </thead>
        <tbody>
          {filteredInfluencers.map((influencer, index) => (
            <tr key={index}>
              <td>#{influencer.rank}</td>
              <td>{influencer.name}</td>
              <td>{influencer.category}</td>
              <td>{influencer.trustScore}</td>
              <td>{influencer.trend}</td>
              <td>{influencer.followers}</td>
              <td>{influencer.verifiedClaims}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;