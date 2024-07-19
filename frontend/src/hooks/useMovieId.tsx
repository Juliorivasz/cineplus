import { useLocation } from "react-router-dom"

export const useMovieId = () => {
    const query = useLocation().search.replace('?','').trim();
    const [id, typeContent] = query.split('-');
    return {id, typeContent};
} 