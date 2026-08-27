function ClassmatesPage() {
  const classmates = [
    { name: 'Rahul', skill: 'Calculator share', status: 'Available now' },
    { name: 'Priya', skill: 'Python help', status: 'Online' },
    { name: 'Aarav', skill: 'Lab partner', status: 'Free tonight' },
  ];

  return (
    <div className="classmates-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Campus network</p>
          <h2>Your classmates</h2>
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading compact">
          <h3>Available now</h3>
        </div>

        <div className="classmate-list">
          {classmates.map((person) => (
            <div key={person.name} className="classmate-item">
              <div className="mini-avatar">{person.name.slice(0, 2).toUpperCase()}</div>
              <div>
                <strong>{person.name}</strong>
                <p>{person.skill}</p>
              </div>
              <span>{person.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ClassmatesPage;
