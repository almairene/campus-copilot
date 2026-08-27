import { useState } from 'react';

import { lostItems, foundItems } from '../data/lostFoundData';

function LostFoundPage() {
  const [mode, setMode] = useState('lost');
  const [submitted, setSubmitted] = useState(false);

  const matchCard = {
    item: 'Black scientific calculator',
    match: '92% match',
    reasons: ['Same category', 'Similar colour', 'Nearby location', 'Similar description'],
  };

  return (
    <div className="lost-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Lost & Found</p>
          <h2>Report an item</h2>
        </div>
      </section>

      <div className="help-toggle">
        <button
          type="button"
          className={mode === 'lost' ? 'active' : ''}
          onClick={() => setMode('lost')}
        >
          I LOST SOMETHING
        </button>
        <button
          type="button"
          className={mode === 'found' ? 'active' : ''}
          onClick={() => setMode('found')}
        >
          I FOUND SOMETHING
        </button>
      </div>

      <div className="lost-grid">
        <section className="section-card">
          <div className="section-heading compact">
            <h3>{mode === 'lost' ? 'LOST' : 'FOUND'}</h3>
          </div>

          {!submitted ? (
            <form className="leave-form lost-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <label>
                <span>Item name</span>
                <input type="text" placeholder={mode === 'lost' ? 'Black scientific calculator' : 'Black calculator found near Block B'} />
              </label>

              <label>
                <span>Category</span>
                <input type="text" placeholder="Electronics" />
              </label>

              <label>
                <span>Description</span>
                <textarea rows="3" placeholder="Brief description" />
              </label>

              <label>
                <span>Colour</span>
                <input type="text" placeholder="Black" />
              </label>

              <label>
                <span>Location</span>
                <input type="text" placeholder="Library entrance" />
              </label>

              <label>
                <span>Date / time</span>
                <input type="text" placeholder="2026-08-24 10:15 AM" />
              </label>

              <label>
                <span>Upload photo</span>
                <div className="upload-box">Photo placeholder</div>
              </label>

              <button type="submit" className="primary-button submit-button">Submit</button>
            </form>
          ) : (
            <div className="success-message">Item reported successfully.</div>
          )}
        </section>

        <section className="section-card">
          <div className="section-heading compact">
            <h3>POSSIBLE MATCH 🎯</h3>
          </div>

          <div className="match-result">
            <h3>{matchCard.match}</h3>
            <p className="match-title">{matchCard.item}</p>

            <ul className="reason-list">
              {matchCard.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>

            <button type="button" className="primary-button">Contact / Verify</button>
          </div>
        </section>
      </div>

      <div className="sample-lists">
        <div className="section-card compact-card">
          <h3>LOST</h3>
          {lostItems.map((item) => (
            <div key={item.item} className="sample-item">
              <strong>{item.item}</strong>
              <span>{item.location}</span>
            </div>
          ))}
        </div>

        <div className="section-card compact-card">
          <h3>FOUND</h3>
          {foundItems.map((item) => (
            <div key={item.item} className="sample-item">
              <strong>{item.item}</strong>
              <span>{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LostFoundPage;
