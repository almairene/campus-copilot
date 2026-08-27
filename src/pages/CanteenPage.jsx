import { useState } from 'react';

import { canteenStatus, forecast } from '../data/canteenData';

function CanteenPage() {
  const [joinedQueue, setJoinedQueue] = useState(false);

  return (
    <div className="canteen-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Canteen</p>
          <h2>Current status</h2>
        </div>
      </section>

      <div className="canteen-grid">
        <section className="section-card status-card">
          <div className="status-badge">🟢 {canteenStatus.crowd}</div>

          <div className="status-list">
            <div>
              <span>People waiting</span>
              <strong>{canteenStatus.waiting}</strong>
            </div>
            <div>
              <span>Estimated waiting time</span>
              <strong>{canteenStatus.estimate}</strong>
            </div>
            <div>
              <span>Average service rate</span>
              <strong>{canteenStatus.rate}</strong>
            </div>
          </div>
        </section>

        <section className="section-card queue-card">
          {!joinedQueue ? (
            <>
              <div className="section-heading compact">
                <h3>JOIN VIRTUAL QUEUE</h3>
              </div>
              <button type="button" className="primary-button" onClick={() => setJoinedQueue(true)}>
                Join queue
              </button>
            </>
          ) : (
            <div className="queue-summary">
              <p>Your token:</p>
              <h3>A24</h3>
              <div className="queue-meta">
                <span>People ahead: 5</span>
                <span>Estimated wait: 4 minutes</span>
              </div>
              <div className="notification-box">Your turn is approaching.</div>
            </div>
          )}
        </section>
      </div>

      <section className="section-card forecast-card">
        <div className="section-heading compact">
          <h3>CROWD FORECAST</h3>
        </div>

        <div className="forecast-list">
          {forecast.map((item) => (
            <div className="forecast-item" key={item.time}>
              <span>{item.time}</span>
              <strong>{item.level}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CanteenPage;
