import { useState, useEffect } from 'react';
import ContentList from './ContentList';
import useGetAllContent from '../hooks/useGetAllContent';

interface Content {
  id: string;
  name: string;
  // Añade otros campos según sea necesario
}

export const SearchContent = () => {
  const [query, setQuery] = useState('');
  const [filteredContents, setFilteredContents] = useState<Content[]>([]);
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);

  const {data} = useGetAllContent();

  console.log(data)

  const handleSelect = (id: string) => {
    setSelectedContentId(id === selectedContentId ? null : id);
  };

  useEffect(() => {
    if (query) {
      const results = data.filter((content) =>
        content.title.toLowerCase().includes(query.toLowerCase())
      );
      console.log(results)
      setFilteredContents(results);
    } else {
      setFilteredContents([]);
    }
  }, [query, data]);

  return (
    <div style={{position: "relative"}}>
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
      <div style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            borderTop: "none",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fefefe",
            position: "absolute",
            width: "100%",
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: "1000",
          }}>
        {query && (
          filteredContents.length > 0 ? (
            filteredContents.map((content) => (
              <div key={content._id} style={{
                padding: "0",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}>{<ContentList content={content} onSelect={handleSelect} selectedContent={selectedContentId}/>}</div>
            ))
          ) : (
            <div style={{padding: "1rem"}}>No encontrado</div>
          )
        )}
      </div>
    </div>
  );
};

