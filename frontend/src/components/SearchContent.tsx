import React, { useState, useEffect } from 'react';

interface Content {
  id: string;
  name: string;
  // Añade otros campos según sea necesario
}

interface SearchContentProps {
  contents: Content[];
}

export const SearchContent: React.FC<SearchContentProps> = ({ contents }) => {
  const [query, setQuery] = useState('');
  const [filteredContents, setFilteredContents] = useState<Content[]>([]);

  useEffect(() => {
    if (query) {
      const results = contents.filter((content) =>
        content.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredContents(results);
    } else {
      setFilteredContents([]);
    }
  }, [query, contents]);

  return (
    <>
      <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Buscar
        </button>
      </form>

      <div style={{ marginTop: '1em' }}>
        {query && (
          filteredContents.length > 0 ? (
            filteredContents.map((content) => (
              <div key={content.id}>{content.name}</div>
            ))
          ) : (
            <div>No encontrado</div>
          )
        )}
      </div>
    </>
  );
};

