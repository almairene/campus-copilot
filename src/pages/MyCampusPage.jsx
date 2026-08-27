import { useState } from 'react';

import { attendanceBreakdown, campusTimetable } from '../data/dashboardData';

function MyCampusPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    reason: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.date || !formData.reason) return;
    setSubmitted(true);
  };

  return (
    <div className="campus-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">My Campus</p>
          <h2>Academic overview</h2>
        </div>
        <button className="primary-button" type="button">Apply Leave</button>
      </section>

      <div className="campus-grid">
        <section className="section-card">
          <div className="section-heading">
            <h3>Today's timetable</h3>
          </div>

          <div className="timeline-list">
            {campusTimetable.map((entry) => (
              <div className="timetable-item" key={`${entry.subject}-${entry.time}`}>
                <div className="time-tag">{entry.time}</div>
                <div className="timetable-copy">
                  <h4>{entry.subject}</h4>
                  <p>{entry.classroom}</p>
                  <span>{entry.faculty}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-card mini-panel">
          <div className="section-heading">
            <h3>Next class</h3>
          </div>

          <div className="next-class-card">
            <p className="next-label">Instrumentation & Control</p>
            <h3>10:00 AM</h3>
            <span>Block C — Room 204</span>
          </div>

          <div className="attendance-panel">
            <div className="section-heading compact">
              <h3>Attendance</h3>
            </div>

            {attendanceBreakdown.map((row) => (
              <div className="attendance-row" key={row.subject}>
                <span>{row.subject}</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="leave-card section-card">
        <div className="section-heading compact">
          <h3>Leave request</h3>
        </div>

        {!submitted ? (
          <form className="leave-form" onSubmit={handleSubmit}>
            <label>
              <span>Date</span>
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </label>

            <label>
              <span>Reason</span>
              <textarea
                name="reason"
                rows="4"
                placeholder="Short reason for absence"
                value={formData.reason}
                onChange={handleChange}
              />
            </label>

            <label>
              <span>Attachment</span>
              <div className="upload-box">Optional attachment placeholder</div>
            </label>

            <button className="primary-button submit-button" type="submit">Submit</button>
          </form>
        ) : (
          <div className="success-message">Leave request submitted.</div>
        )}
      </section>
    </div>
  );
}

export default MyCampusPage;
