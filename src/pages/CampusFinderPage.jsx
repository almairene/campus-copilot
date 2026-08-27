import { useMemo, useState } from 'react';

import { campusLocations, spotlightRoute, facilityMeta } from '../data/campusData';

const filterOptions = ['Main Block', 'Library', 'Canteen', 'Seminar Hall', 'Computer Lab', 'Instrumentation Lab'];

function CampusFinderPage() {
  const [query, setQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Instrumentation Lab');
  const [lateMode, setLateMode] = useState(false);

  const filteredLocations = useMemo(() => {
    if (!query) return campusLocations;
    return campusLocations.filter((location) =>
      location.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const locationDetails = campusLocations.find((location) => location.name === selectedLocation) || campusLocations[5];
  const facility = facilityMeta[selectedLocation] || facilityMeta.default;

  const handleLateMode = () => {
    setLateMode(true);
    setSelectedLocation('Instrumentation Lab');
  };

  return (
    <div className="finder-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Campus Finder</p>
          <h2>Where do you want to go?</h2>
        </div>
        <button className="primary-button" type="button" onClick={handleLateMode}>
          I'M LATE
        </button>
      </section>

      <div className="search-box finder-search">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Where do you want to go?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="campus-finder-grid">
        <section className="section-card map-panel">
          <div className="section-heading compact">
            <h3>Campus map</h3>
          </div>

          <div className="campus-map-board">
            <div className="campus-map-grid">
              <div className="campus-path path-main" />
              <div className="campus-path path-cross" />
              <div className="campus-building building-main" />
              <div className="campus-building building-library" />
              <div className="campus-building building-canteen" />
              <div className="campus-building building-hall" />
              <div className="campus-building building-lab" />
              <div className="campus-building building-instrument" />
              <div className="campus-building building-medical" />
              <div className="campus-building building-hostel" />
              <div className="campus-tree tree-1" />
              <div className="campus-tree tree-2" />
              <div className="campus-tree tree-3" />
              <div className="campus-tree tree-4" />
              <div className="campus-tree tree-5" />
              <div className="campus-tree tree-6" />
              <div className="campus-tree tree-7" />
              <div className="campus-tree tree-8" />
              <div className="campus-tree tree-9" />
              <div className="campus-tree tree-10" />
              <div className="map-node main-block">Main Block</div>
              <div className="map-node library">Library</div>
              <div className="map-node canteen">Canteen</div>
              <div className="map-node hall">Seminar Hall</div>
              <div className="map-node computer">Computer Lab</div>
              <div className={`map-node instrument ${selectedLocation === 'Instrumentation Lab' ? 'selected' : ''}`}>
                Instrumentation Lab
              </div>
              <div className="map-node medical">Medical Centre</div>
              <div className="map-node printing">Printing Shop</div>
              <div className="map-node parking">Parking</div>
              <div className="map-node hostel">Hostel</div>
              <div className="marker marker-user">You</div>
            </div>
          </div>

          <div className="campus-grid-layout">
            {filteredLocations.map((location) => (
              <button
                key={location.name}
                type="button"
                className={`map-tile ${selectedLocation === location.name ? 'active' : ''}`}
                onClick={() => {
                  setSelectedLocation(location.name);
                  setLateMode(false);
                }}
              >
                <span>{location.name}</span>
                <small>{location.block}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="section-card info-panel">
          <div className="section-heading compact">
            <h3>Route details</h3>
          </div>

          {lateMode ? (
            <div className="route-details">
              <p className="route-label">Fastest route</p>
              <h3>
                {spotlightRoute.start} → {spotlightRoute.mid} → {spotlightRoute.end}
              </h3>
              <div className="route-meta">
                <span>Distance: {spotlightRoute.distance}</span>
                <span>Walking time: {spotlightRoute.time}</span>
              </div>
            </div>
          ) : (
            <div className="route-details">
              <p className="route-label">Location</p>
              <h3>{locationDetails.name}</h3>
              <div className="route-meta">
                <span>Approximate distance: {locationDetails.distance}</span>
                <span>Estimated walking time: {locationDetails.time}</span>
              </div>
            </div>
          )}

          <div className="step-panel">
            <h4>Step-by-step directions</h4>
            <ol>
              {facility.directions.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="facility-panel">
            <div>
              <span>Floor</span>
              <strong>{facility.floor}</strong>
            </div>
            <div>
              <span>Nearby</span>
              <strong>{facility.nearby.join(', ')}</strong>
            </div>
            <div>
              <span>Amenities</span>
              <strong>{facility.amenities.join(', ')}</strong>
            </div>
          </div>

          <div className="quick-options">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`chip ${selectedLocation === option ? 'active' : ''}`}
                onClick={() => {
                  setSelectedLocation(option);
                  setLateMode(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CampusFinderPage;
