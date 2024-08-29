/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuery = searchParams.get("page");

  useEffect(() => {
    if (pageQuery) {
      setCurrentPage(Number(pageQuery));
    }
  }, [pageQuery, setCurrentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (selectedItem) => {
    const newPage = selectedItem.selected + 1;
    setCurrentPage(newPage);
    setSearchParams({ page: newPage.toString() });
  };

  return (
    <div className="font-medium text-white flex justify-center py-16">
      <ReactPaginate
        previousLabel={<IoIosArrowBack size={24} />}
        nextLabel={<IoIosArrowForward size={24} />}
        breakLabel="..."
        breakClassName="mt-3"
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        forcePage={currentPage - 1}
        containerClassName="flex space-x-5"
        pageClassName="border border-white rounded-lg hover:bg-teal-500"
        pageLinkClassName="block p-[1em]"
        activeClassName="bg-teal-600 border-none"
        previousClassName="flex items-center"
        nextClassName="flex items-center"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;
