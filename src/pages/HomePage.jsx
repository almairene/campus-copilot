import ActionCard from '../components/ActionCard';
import { todayItems, actionCards } from '../data/dashboardData';

const actionMap = {
  'I NEED': 'help',
  'I HAVE': 'help',
  'I WANT TO GO': 'finder',
};

function HomePage({ studentName = 'Anna', onSelectAction }) {
  return (
    <>
      <section className="hero">
        <div>
          <p className="greeting">Hi, {studentName} 👋</p>
          <h2>What do you need today?</h2>
        </div>

        <div className="search-box">
          <span>⌕</span>
          <input type="text" placeholder="Ask Campus Copilot" />
        </div>
      </section>

      <section className="action-grid">
        {actionCards.map((card) => (
          <div key={card.title} onClick={() => onSelectAction(actionMap[card.title])}>
            <ActionCard title={card.title} tone={card.tone} icon={card.icon} />
          </div>
        ))}
      </section>

      <section className="section-card">
        <div className="section-heading">
          <h3>TODAY</h3>
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
