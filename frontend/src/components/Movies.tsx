import { FilterFind } from './FilterFind';
import { Pagination } from './Pagination';
export const Movies = () => {
  return (
    <>
    <FilterFind/>
    <p className="title__estreno h1">Peliculas</p>
    <Pagination/>
    </>
  )
}
