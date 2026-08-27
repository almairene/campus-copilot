import { useState } from 'react';

import { needCategories, needMatches, offerMatches } from '../data/helpData';

function HelpPage() {
  const [mode, setMode] = useState('need');
  const [selectedCategory, setSelectedCategory] = useState('Calculator');
  const [offerSubmitted, setOfferSubmitted] = useState(false);

  const currentMatches = mode === 'need' ? needMatches : offerMatches;

  return (
    <div className="help-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Campus support</p>
          <h2>{mode === 'need' ? 'I NEED' : 'I HAVE'}</h2>
        </div>
      </section>

      <div className="help-toggle">
        <button
          type="button"
          className={mode === 'need' ? 'active' : ''}
          onClick={() => setMode('need')}
        >
          I NEED
        </button>
        <button
          type="button"
          className={mode === 'have' ? 'active' : ''}
          onClick={() => setMode('have')}
        >
          I HAVE
        </button>
      </div>

      <div className="help-grid">
        <section className="section-card">
          <div className="section-heading compact">
            <h3>{mode === 'need' ? 'Categories' : 'Offer type'}</h3>
          </div>

          <div className="chip-list">
            {needCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`chip ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="section-card">
          <div className="section-heading compact">
            <h3>{mode === 'need' ? 'MATCHES FOUND' : 'Your listing'}</h3>
          </div>

          {mode === 'need' ? (
            <div className="matches-list">
              {currentMatches.map((match) => (
                <div className="match-card" key={`${match.name}-${match.item}`}>
                  <div className="match-topline">
                    <strong>{match.name}</strong>
                    <button type="button" className="small-button">Request</button>
                  </div>
                  <p>{match.item}</p>
                  <span>{match.distance}</span>
                  <small>{match.availability}</small>
                </div>
              ))}
            </div>
          ) : (
            <div className="offer-box">
              <div className="offer-form">
                <label>
                  <span>Item / Skill</span>
                  <input type="text" value="Python Programming" readOnly />
                </label>
                <label>
                  <span>Availability</span>
                  <input type="text" value="6 PM – 8 PM" readOnly />
                </label>
                <label>
                  <span>Approximate location</span>
                  <input type="text" value="Near Library" readOnly />
                </label>
              </div>

              {!offerSubmitted ? (
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setOfferSubmitted(true)}
                >
                  List my skill
                </button>
              ) : (
                <div className="success-message">Your skill is now available for matching.</div>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default HelpPage;
