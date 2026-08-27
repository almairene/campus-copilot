import { profileStats, quickActions } from '../data/profileData';

function ProfilePage() {
  return (
    <div className="profile-page">
      <section className="profile-hero section-card">
        <div className="profile-header">
          <div className="profile-avatar large">AN</div>
          <div>
            <p className="eyebrow">Student profile</p>
            <h2>Anna Nair</h2>
            <span>Roll No: IN-2047</span>
          </div>
        </div>

        <div className="profile-chip-row">
          <span className="mini-pill">Instrumentation</span>
          <span className="mini-pill">3rd Year</span>
          <span className="mini-pill">Campus active</span>
        </div>
      </section>

      <section className="stats-grid">
        {profileStats.map((item) => (
          <div key={item.label} className="stat-card section-card">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </div>
        ))}
      </section>

      <section className="section-card">
        <div className="section-heading compact">
          <h3>Quick links</h3>
        </div>

        <div className="quick-actions">
          {quickActions.map((action) => (
            <button type="button" key={action} className="chip action-chip">
              {action}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
