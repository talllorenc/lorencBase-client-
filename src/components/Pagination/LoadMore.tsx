
interface INoteList {
  data: any;
  perPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoadMore = ({ data, perPage, page, setPage }: INoteList) => {

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(data.notes);
    
  };

  return (
    <div className="flex gap-4 justify-center mt-4">
      <button
        className="px-4 py-2 rounded bg-blue-600 hover:opacity-80"
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
