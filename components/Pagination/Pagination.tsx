import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";
interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  page,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => {
        const nextPage = Number(selected) + 1;
        if (!isNaN(nextPage)) {
          onPageChange(nextPage);
        }
      }}
      forcePage={Number.isInteger(page) ? page - 1 : 0}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}