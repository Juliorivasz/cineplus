import { useState } from 'react';

export const VisitPage = () => {
    const [visit, setVisit] = useState(0);

  return (
    <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '500px', margin: 'auto', backgroundColor:'white', borderRadius: '1rem'}}>
        <div style={{width: '100%', padding: '5rem 0'}}>
            <p className="h1">{visit}</p>
            <p className="h3">Visit</p>
        </div>
        <div style={{width: '100%', padding: '1rem'}}>
            <p className='h3'>Dates</p>
            <ol style={{overflow: 'overlay', height: '300px', margin: '0 1rem', listStyle:'none', padding: '0'}}>
                <li>hola</li>
            </ol>
        </div>
    </section>
  )
}
