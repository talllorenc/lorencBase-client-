import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface INoteList {
  data: any;
  perPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PagesPagination = ({ data, perPage, page, setPage }: INoteList) => {
  const pathname = usePathname();

  const totalPages = Math.ceil(data ? data.totalItems / perPage : 0);
  const isPageOutOfRange = page > totalPages;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="flex gap-4 justify-center mt-4">
      <Link href={{ pathname: "/notes", query: { page: page - 1 } }} passHref>
        <button
          className={`${
            page === 1
              ? "px-4 py-2 rounded bg-gray-500 cursor-not-allowed hover:bg-gray-500"
              : "px-4 py-2 rounded bg-blue-600 hover:opacity-80"
          }
           `}
          disabled={page === 1}
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          PREV
        </button>
      </Link>

      <Link href={{ pathname: "/notes", query: { page: page + 1 } }} passHref>
        <button
          className={`${
            page === totalPages
              ? "px-4 py-2 rounded bg-gray-500 cursor-not-allowed hover:bg-gray-500"
              : "px-4 py-2 rounded bg-blue-600 hover:opacity-80"
          }
           `}
          disabled={page === totalPages}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          NEXT
        </button>
      </Link>
    </div>
  );
};

export default PagesPagination;
