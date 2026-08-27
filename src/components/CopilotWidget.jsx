import { useState } from 'react';

const suggestions = [
  'What should I focus on today?',
  'Find a quiet study space',
  'Predict my attendance',
];

function CopilotWidget() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('I found 3 high-impact actions for your day.');

  const askCopilot = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    setReply(`Here is a smart plan for “${message.trim()}”: review your 10:00 AM class, grab lunch before the peak, and reserve 45 minutes for your pending assignment.`);
    setMessage('');
  };

  return (
    <section className="copilot-widget">
      <div className="copilot-orbit" aria-hidden="true"><span>✦</span></div>
      <div className="copilot-content">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow copilot-eyebrow">Campus intelligence</p>
            <h3>Ask your Copilot</h3>
          </div>
          <span className="live-status"><i /> Live</span>
        </div>
        <p className="copilot-reply">{reply}</p>
        <div className="suggestion-row">
          {suggestions.map((suggestion) => (
            <button key={suggestion} type="button" className="suggestion-chip" onClick={() => setMessage(suggestion)}>
              {suggestion}
            </button>
          ))}
        </div>
        <form className="copilot-form" onSubmit={askCopilot}>
          <input aria-label="Ask Campus Copilot" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask anything about campus..." />
          <button type="submit" className="send-button" aria-label="Send question">↑</button>
        </form>
      </div>
    </section>
  );
}

export default CopilotWidget;
