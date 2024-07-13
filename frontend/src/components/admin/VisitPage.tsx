import { useState, useEffect } from 'react';
import useVisit from '../../hooks/useVisit';

interface VisitItem {
    _id: string;
    date: string; // Ajusta el tipo según la estructura real de los objetos en visitAll
}

export const VisitPage = () => {
    const { getVisit } = useVisit();
    const [visitCount, setVisitCount] = useState<number>(0);
    const [visitAll, setVisitAll] = useState<VisitItem[]>([])

    useEffect(() => {
        const handleVisit = async () => {
            const visit = await getVisit();
            const countAllVisit = visit.length;
            setVisitCount(countAllVisit);
            setVisitAll(visit.allVisit.reverse())
        };
        handleVisit()
      }, []);

    //formatea la fecha en un formato común global
    const formatDateString = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        });
    };

  return (
    <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '500px', margin: 'auto', backgroundColor:'white', borderRadius: '1rem'}}>
        <div style={{width: '100%', padding: '5rem 0'}}>
            <p className="h1">{visitCount}</p>
            <p className="h3">Visit</p>
        </div>
        <div style={{width: '100%', padding: '1rem'}}>
            <p className='h3'>Dates</p>
            <ol style={{overflow: 'overlay', height: '300px', margin: '0 1rem', listStyle:'none', padding: '0'}}>
                {visitAll.map((v)=>(
                    <li key={v._id} style={{margin: '1rem 0'}}>
                        {formatDateString(v.date)}
                    </li>
                ))}
            </ol>
        </div>
    </section>
  )
}
