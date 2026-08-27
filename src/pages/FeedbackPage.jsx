import { useState } from 'react';

function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="feedback-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Support</p>
          <h2>Feedback & Ask</h2>
        </div>
      </section>

      {!submitted ? (
        <section className="section-card feedback-card">
          <div className="section-heading compact">
            <h3>Ask the campus community</h3>
          </div>

          <form
            className="leave-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>
              <span>Type</span>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option value="feedback">Feedback</option>
                <option value="question">Question</option>
                <option value="support">Support</option>
              </select>
            </label>

            <label>
              <span>Ask your classmates</span>
              <textarea rows="4" placeholder="How can the campus community help you?" />
            </label>

            <label>
              <span>Tag</span>
              <select defaultValue="">
                <option value="" disabled>Choose a tag</option>
                <option value="course">Course</option>
                <option value="career">Career</option>
                <option value="campus">Campus</option>
                <option value="network">Network</option>
              </select>
            </label>

            <button type="submit" className="primary-button submit-button">Send</button>
          </form>
        </section>
      ) : (
        <section className="section-card">
          <div className="success-message">Your question has been shared with classmates and alumni support.</div>
        </section>
      )}
    </div>
  );
}

export default FeedbackPage;
