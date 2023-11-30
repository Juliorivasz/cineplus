import { Link } from "react-router-dom"

interface paginationProps {
    sizeContent: number;
    currentPage: number;
    handlePage: (number:number)=>void;
}

export const Pagination = ({sizeContent, currentPage, handlePage}:paginationProps) => {

    let paginationAmount = sizeContent; 
    if(paginationAmount && sizeContent > 12) {
        paginationAmount = Math.ceil(paginationAmount / 12);
    }

    const paginationBuild = [];

    for(let i = 1; i <= paginationAmount; i++){
        if(currentPage == i) {
            paginationBuild.push(
                <li key={i} className="page-item active"><Link className="page-link" to={""} onClick={(e) => {e.preventDefault(); handlePage(i)}}>{i}</Link></li>
            )
        }else {
            paginationBuild.push(
                <li key={i} className="page-item"><Link className="page-link" to={""} onClick={(e) => {e.preventDefault(); handlePage(i)}}>{i}</Link></li>
            )
        }
    }

  return (
    <nav className="pagination__container"  aria-label="...">
        <ul className="pagination">
            <li className={`page-item ${currentPage == 1 ? 'disabled' : ''}`}>
                <Link className="page-link" to={''} onClick={(e) => {e.preventDefault(); handlePage(currentPage-1)}}>Previous</Link>
            </li>
            {paginationBuild}
            <li className="page-item">
                <Link className={`page-link ${currentPage == paginationAmount ? 'disabled' : ''}`} to={''} onClick={(e) => {e.preventDefault(); handlePage(currentPage+1)}}>Next</Link>
            </li>
        </ul>
    </nav>
  )
}
