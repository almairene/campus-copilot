import { useState } from 'react';

const buses = [
  { number: 1, route: 'Gandhipuram - Campus', location: 'Near PSG Hospital', eta: '8 min', stops: ['Gandhipuram', 'Peelamedu', 'PSG Hospital', 'Campus Gate'] },
  { number: 2, route: 'Singanallur - Campus', location: 'Singanallur signal', eta: '12 min', stops: ['Singanallur', 'Uppilipalayam', 'Hope College', 'Campus Gate'] },
  { number: 3, route: 'Saibaba Colony - Campus', location: 'Cross Cut Road', eta: '5 min', stops: ['Saibaba Colony', 'GKNM', 'Avinashi Road', 'Campus Gate'] },
  { number: 4, route: 'Railway Station - Campus', location: 'Race Course', eta: '15 min', stops: ['Railway Station', 'Race Course', 'Lakshmi Mills', 'Campus Gate'] },
  { number: 5, route: 'Ukkadam - Campus', location: 'Town Hall', eta: '19 min', stops: ['Ukkadam', 'Town Hall', 'Sungam', 'Campus Gate'] },
  { number: 6, route: 'Hostel Loop', location: 'Hostel Block F', eta: '3 min', stops: ['Hostel Block F', 'Library', 'Main Block', 'Canteen'] },
  { number: 7, route: 'Library Loop', location: 'Library stop', eta: '6 min', stops: ['Library', 'Seminar Hall', 'Lab Block', 'Main Block'] },
  { number: 8, route: 'North Gate - Campus', location: 'North Gate', eta: '10 min', stops: ['North Gate', 'Tech Park', 'Canteen', 'Campus Gate'] },
  { number: 9, route: 'Staff Quarters - Campus', location: 'Staff Quarters', eta: '14 min', stops: ['Staff Quarters', 'Medical Centre', 'Main Block', 'Campus Gate'] },
  { number: 10, route: 'Evening Shuttle', location: 'Canteen stop', eta: '2 min', stops: ['Canteen', 'Hostel Block F', 'Sports Ground', 'North Gate'] },
];

function TransportPage() {
  const [selectedBus, setSelectedBus] = useState(buses[0]);
  const [paid, setPaid] = useState(false);

  return (
    <div className="transport-page">
      <section className="page-header">
        <div><p className="eyebrow">Smart mobility</p><h2>Campus transport</h2><p className="page-subtitle">Know your bus before you step out.</p></div>
        <span className="service-status"><i /> Service running</span>
      </section>

      <section className="transport-hero">
        <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=82" alt="Campus shuttle bus" />
        <div><span className="visual-badge">LIVE ROUTE NETWORK</span><h3>Move around campus with confidence.</h3><p>Track shuttles, check every stop, and reserve your monthly pass.</p></div>
        <div className="transport-hero-stat"><strong>10</strong><span>active buses</span></div>
      </section>

      <div className="transport-layout">
        <section className="section-card bus-selector-panel">
          <div className="section-heading"><div><p className="eyebrow">Choose a route</p><h3>Which bus will you board?</h3></div><span className="live-count">10 routes</span></div>
          <div className="bus-grid">{buses.map((bus) => <button key={bus.number} type="button" className={`bus-choice ${selectedBus.number === bus.number ? 'active' : ''}`} onClick={() => setSelectedBus(bus)}><span className="bus-number">{bus.number}</span><span><strong>Bus {bus.number}</strong><small>{bus.route}</small></span><b>{bus.eta}</b></button>)}</div>
        </section>

        <section className="section-card live-bus-panel">
          <div className="section-heading"><div><p className="eyebrow">Live now</p><h3>Bus {selectedBus.number} location</h3></div><span className="tracking-dot"><i /> Tracking</span></div>
          <div className="bus-location"><div className="bus-map-line"><span className="route-start">Board</span><i className="bus-pin">▰</i><span className="route-end">Campus</span></div><strong>{selectedBus.location}</strong><p>Arriving in <b>{selectedBus.eta}</b> · {selectedBus.route}</p></div>
          <div className="stop-list"><p className="eyebrow">Upcoming stops</p>{selectedBus.stops.map((stop, index) => <div className={index === 0 ? 'stop active-stop' : 'stop'} key={stop}><i /><span>{stop}</span>{index === 0 && <small>Now</small>}</div>)}</div>
        </section>
      </div>

      <div className="transport-bottom-grid">
        <section className="section-card query-card"><div className="query-icon">?</div><div><p className="eyebrow">Need help on the route?</p><h3>Transport query desk</h3><p>Call <strong>1800-425-1010</strong> or send a query to the mobility team.</p></div><button className="small-button" type="button">Ask a query</button></section>
        <section className="section-card fee-card"><div className="section-heading compact"><div><p className="eyebrow">Student services</p><h3>Transport pass</h3></div><span className="fee-amount">₹1,200 <small>/ semester</small></span></div><p>Unlimited rides on all campus routes. Your pass renews on 01 Sep 2026.</p><button className="primary-button" type="button" onClick={() => setPaid(true)}>{paid ? 'Payment recorded' : 'Pay transport fee →'}</button></section>
      </div>
    </div>
  );
}

export default TransportPage;
