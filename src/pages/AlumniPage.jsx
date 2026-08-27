function AlumniPage() {
  const alumni = [
    { name: 'Nisha Verma', role: 'Product Manager', specialty: 'Career advice' },
    { name: 'Rohan Iyer', role: 'Data Engineer', specialty: 'Projects' },
    { name: 'Sudeep Rao', role: 'Embedded Systems', specialty: 'Internships' },
  ];

  return (
    <div className="alumni-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Alumni support</p>
          <h2>Ask alumni</h2>
        </div>
      </section>

      <section className="section-card">
        <div className="alumni-list">
          {alumni.map((person) => (
            <div key={person.name} className="alumni-card">
              <div className="mini-avatar alt">{person.name.slice(0, 2).toUpperCase()}</div>
              <div>
                <strong>{person.name}</strong>
                <p>{person.role}</p>
                <span>{person.specialty}</span>
              </div>
              <button type="button" className="small-button">Ask</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AlumniPage;
