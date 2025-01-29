import { useState } from 'react';
import './InfluencerPage.css';

const InfluencerPage = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [verificationFilter, setVerificationFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('');
  const [dateOrder, setDateOrder] = useState('recent'); // 'recent' or 'old'

  const claims = [
    { id: 1, claim: "Viewing sunlight within 30-60 minutes of waking enhances cortisol release", category: "Sleep", verification: "Verified", date: "2023-09-12", trustScore: 92 },
    { id: 2, claim: "Non-sleep deep rest (NSDR) protocols can accelerate learning and recovery", category: "Recovery", verification: "Verified", date: "2023-08-15", trustScore: 88 },
    { id: 3, claim: "Exercise improves cognitive function", category: "Exercise", verification: "Verified", date: "2023-07-20", trustScore: 85 },
    // Add more claims as needed
  ];

  const categories = ['All', 'Sleep', 'Performance', 'Hormones', 'Nutrition', 'Exercise', 'Stress', 'Cognition', 'Motivation', 'Recovery', 'Mental Health'];
  const verificationStatuses = ['All', 'Verified', 'Questionable', 'Debunked'];

  const filteredClaims = claims.filter(claim => {
    const matchesCategory = categoryFilter === 'All' || claim.category === categoryFilter;
    const matchesVerification = verificationFilter === 'All' || claim.verification === verificationFilter;
    const matchesDate = dateFilter === '' || 
      (dateOrder === 'recent' ? claim.date >= dateFilter : claim.date <= dateFilter);

    return matchesCategory && matchesVerification && matchesDate;
  }).sort((a, b) => {
    if (dateOrder === 'recent') {
      return new Date(b.date) - new Date(a.date); // Most recent first
    } else {
      return new Date(a.date) - new Date(b.date); // Oldest first
    }
  });

  return (
    <div className="influencer-page">
      <div className="influencer-header">
        <div className="influencer-info">
            <img src="https://imgs.search.brave.com/-r35cSVEiFKn2IPnsIEtHUcUHIiCt4bpuap53KUhPA0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/MDYxNjc3Mi9lcy9m/b3RvL3JldHJhdG8t/ZGUtam92ZW4tcmVm/bGV4aXZvLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1fQXRx/TG1XYXJlRFpWZURV/bVpoWWtaY3lVcjRk/YUJPc1Z2c1NkV2Mw/WmZFPQ" alt="" />
                <div className='influencer-resume'>
                <h1>Andrew Huberman</h1>
                <h2>Neuroscience</h2>
                <p>Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration. Host of the Huberman Lab Podcast, translating neuroscience into practical tools for everyday life. Known for evidence-based approaches to performance, sleep, stress management, and brain optimization.</p>
                </div>
                
      </div>
      </div>

      <div className="influencer-stats">
        <div className="stat">
          <h3>Trust Score</h3>
          <p>89%</p>
        </div>
        <div className="stat">
          <h3>Yearly Revenue</h3>
          <p>$5.0M</p>
        </div>
        <div className="stat">
          <h3>Products</h3>
          <p>1</p>
        </div>
        <div className="stat">
          <h3>Followers</h3>
          <p>4.2M+</p>
        </div>
      </div>

      <div className="filters">
        <div className="filter">
          <label htmlFor="category-filter">Category: </label>
          <select id="category-filter" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label htmlFor="verification-filter">Verification: </label>
          <select id="verification-filter" value={verificationFilter} onChange={(e) => setVerificationFilter(e.target.value)}>
            {verificationStatuses.map((status, index) => (
              <option key={index} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label htmlFor="date-filter">Date: </label>
          <input type="date" id="date-filter" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} />
        </div>

        <div className="filter">
          <label htmlFor="date-order">Order by Date: </label>
          <select id="date-order" value={dateOrder} onChange={(e) => setDateOrder(e.target.value)}>
            <option value="recent">Most Recent</option>
            <option value="old">Oldest</option>
          </select>
        </div>
      </div>

      <div className="claims-list">
        <h3>Claims Analysis</h3>
        {filteredClaims.map(claim => (
          <div key={claim.id} className="claim">
            <div className="claim-header">
              <span className="trust-score">{claim.trustScore}%</span>
              <span className="verification-status">{claim.verification}</span>
            </div>
            <p>{claim.claim}</p>
            <div className="claim-footer">
              <span className="category">{claim.category}</span>
              <span className="date">{claim.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerPage;