interface ButtonRoutesProps {
    typeContent: string;
}

interface routesPage {
    Premier: string;
    Movie: string;
    Serie: string;
    Anime: string;
    [key:string]: string;
}
export const ButtonRoutes = ({typeContent}:ButtonRoutesProps) => {

    const routePage: routesPage = {
        'Premier':'premier',
        'Movie':'movie',
        'Serie':'serie',
        'Anime':'anime',
    }

    const urlContent = () => {
        location.href = routePage[typeContent];
    }

  return (
    <div className="btn-group" style={{margin: '1rem'}}>
      <button type="button" className="btn btn-secondary" onClick={urlContent}>{typeContent}</button>
      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
      <li><a className="dropdown-item" href={`${routePage[typeContent]}/add`}>Add</a></li>
      <li><a className="dropdown-item" href={`${routePage[typeContent]}/remove`}>Remove</a></li>
      <li><a className="dropdown-item" href={`${routePage[typeContent]}/update`}>Update</a></li>
      </ul>
    </div>
  )
}
