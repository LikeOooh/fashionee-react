import './Pagination.scss';
import { Icon } from '../icon/Icon.jsx';

export function Pagination({ totalPages, pages, currentPage, setCurrentPage }) {
    return (
        <div className="pagination">
            <button
                className="pagination__button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
            >
                <Icon name="left-pagin-arrow" className="icon_pagin-arrow" />
            </button>
            <div className="pagination__pages">
                {pages.map((pageNumber) => (
                    <div
                        key={String(pageNumber)}
                        className={`pagination__page ${pageNumber === currentPage && ' active'}`}
                        onClick={() => setCurrentPage(pageNumber)}
                    >
                        {pageNumber}
                    </div>
                ))}
            </div>
            <button
                className="pagination__button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
            >
                <Icon name="right-pagin-arrow" className="icon_pagin-arrow" />
            </button>
        </div>
    );
}
