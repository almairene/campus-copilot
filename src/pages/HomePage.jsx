import ActionCard from '../components/ActionCard';
import CopilotWidget from '../components/CopilotWidget';
import { todayItems, actionCards } from '../data/dashboardData';

const actionMap = {
  'I NEED': 'help',
  'I HAVE': 'help',
  'I WANT TO GO': 'finder',
};

function HomePage({ studentName = 'Anna', onSelectAction, insightsOnly = false }) {
  return (
    <>
      <section className="hero dashboard-hero">
        <div>
          <p className="eyebrow">Thursday, 27 August 2026 · Student command center</p>
          <h2>Good morning, {studentName.split(' ')[0]} <span className="accent-dot">.</span></h2>
          <p className="hero-caption">Your smart companion for campus life.</p>
        </div>

        <div className="search-box">
          <span>⌕</span>
          <input type="text" placeholder="Search campus, people, or ask Copilot" />
          <kbd>⌘ K</kbd>
        </div>
      </section>

      <section className="campus-welcome-banner">
        <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=82" alt="Students walking through a university campus" />
        <div className="welcome-overlay">
          <span className="visual-badge">PSG iTech campus</span>
          <h3>Everything you need, in one place.</h3>
          <p>Learn smarter. Move freely. Give back.</p>
        </div>
        <div className="welcome-stat"><strong>12.4k</strong><span>campus connections</span></div>
      </section>

      {!insightsOnly && <section className="action-grid">
        {actionCards.map((card) => (
          <div key={card.title} onClick={() => onSelectAction(actionMap[card.title])}>
            <ActionCard title={card.title} tone={card.tone} icon={card.icon} />
          </div>
        ))}
      </section>}

      <section className="dashboard-grid">
        <div className="dashboard-main">
          <section className="section-card schedule-card">
            <div className="section-heading">
              <div><p className="eyebrow">Today · 4 classes</p><h3>My schedule</h3></div>
              <button className="text-button" type="button" onClick={() => onSelectAction('campus')}>View timetable →</button>
            </div>
            <div className="schedule-row active-schedule"><span className="schedule-time">10:00</span><div className="schedule-line"><i /></div><div><strong>Instrumentation & Control</strong><p>Block C · Room 204 <span className="status-pill live">In 35 min</span></p></div></div>
            <div className="schedule-row"><span className="schedule-time">11:30</span><div className="schedule-line"><i /></div><div><strong>Mathematics</strong><p>Block A · Room 102</p></div></div>
            <div className="schedule-row"><span className="schedule-time">13:30</span><div className="schedule-line"><i /></div><div><strong>Physics Lab</strong><p>Science Block · Lab 2</p></div></div>
          </section>

          <section className="insight-strip">
            <div className="insight-heading"><span className="metric-icon">↗</span><div><p className="eyebrow">AI prediction</p><h3>Attendance outlook</h3></div><strong>92%</strong></div>
            <div className="progress-track"><span /></div>
            <p>You're on track to reach <b>95%</b> this semester. Attend 2 of your next 3 classes to stay above target.</p>
          </section>

          <section className="section-card dashboard-lower">
            <div className="section-heading"><div><p className="eyebrow">Stay in the loop</p><h3>Campus pulse</h3></div><button className="text-button" type="button">See all</button></div>
            <div className="pulse-grid"><div className="pulse-item"><span className="pulse-label">Announcements</span><strong>02</strong><p>New library hours & exam registration</p></div><div className="pulse-item"><span className="pulse-label">Events</span><strong>05</strong><p>Tech Fest Meetup · Today, 5:30 PM</p></div><div className="pulse-item sustainability"><span className="pulse-label">Impact score</span><strong>740 <small>pts</small></strong><p>You've helped rescue 12 meals this month</p></div></div>
          </section>
        </div>
        <div className="dashboard-side">
          <CopilotWidget />
          <section className="section-card action-panel"><div className="section-heading compact"><div><p className="eyebrow">One tap away</p><h3>Smart campus</h3></div></div><button type="button" className="smart-action" onClick={() => onSelectAction('canteen')}><span>◷</span><div><strong>Smart Canteen Queue</strong><small>Low crowd · 6 min wait</small></div><b>→</b></button><button type="button" className="smart-action" onClick={() => onSelectAction('finder')}><span>⌖</span><div><strong>Smart Campus Map</strong><small>5 min to your next class</small></div><b>→</b></button><button type="button" className="smart-action" onClick={() => onSelectAction('exchange')}><span>♻</span><div><strong>Reuse Hub</strong><small>18 items near you</small></div><b>→</b></button></section>
        </div>
      </section>

      <section className="campus-moments">
        <div className="moment-heading"><div><p className="eyebrow">Life on campus</p><h3>Small moments, made easier</h3></div><span className="moment-mark">C / 01</span></div>
        <div className="moment-grid">
          <button type="button" className="moment-card" onClick={() => onSelectAction('finder')}><img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80" alt="Quiet library shelves" /><span>Find your focus</span><small>Quiet study spaces nearby →</small></button>
          <button type="button" className="moment-card" onClick={() => onSelectAction('canteen')}><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80" alt="Campus cafe table" /><span>Meet, eat, repeat</span><small>See the canteen pulse →</small></button>
          <button type="button" className="moment-card" onClick={() => onSelectAction('exchange')}><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80" alt="Green plant and sustainable reuse" /><span>Pass it forward</span><small>Reuse something today →</small></button>
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div><p className="eyebrow">Your day at a glance</p><h3>Smart summary</h3></div>
          <button className="text-button" type="button">View all</button>
        </div>

        <div className="summary-grid">
          {todayItems.map((item) => (
            <div className="summary-item" key={item.label}>
              <p>{item.label}</p>
              <h4>{item.value}</h4>
              <span>{item.sub}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
