import { useMemo, useState } from 'react';

import { exchangeCategories, exchangeItems } from '../data/exchangeData';

function ExchangePage() {
  const [selectedCategory, setSelectedCategory] = useState('SELL');
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    return exchangeItems.filter((item) => {
      const matchesCategory = item.category === selectedCategory;
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <div className="exchange-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Campus Exchange</p>
          <h2>Marketplace</h2>
        </div>
      </section>

      <div className="search-box finder-search">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search listings"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <section className="section-card">
        <div className="section-heading compact">
          <h3>Categories</h3>
        </div>

        <div className="chip-list">
          {exchangeCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading compact">
          <h3>Listings</h3>
        </div>

        <div className="exchange-grid">
          {filteredItems.map((item) => (
            <div className="listing-card" key={`${item.title}-${item.category}`}>
              <div className="listing-topline">
                <strong>{item.title}</strong>
                <span className="listing-tag">{item.category}</span>
              </div>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExchangePage;
