const SkeletonDetail = () => {
  return (
    <div className="w-full">
      <div className="border-2 rounded border-[#5f5f5f] bg-[#5f5f5f] animate-pulse p-2">
        <h2 className="h-8 w-1/2 mb-2 bg-gray-400 rounded"></h2>

        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <ul className="flex gap-2 text-xs text-black">
              <li className="border rounded px-1 bg-[#F8F4FF] h-6 w-[40px]"></li>
            </ul>

            <div className="h-12 bg-gray-400 w-[100px] rounded"></div>
          </div>

          <p className="h-6 w-1/12 bg-gray-400 rounded"></p>
        </div>

        <div className="border rounded px-1 bg-[#F8F4FF] h-40 mt-12"></div>
        <div className="border rounded px-1 bg-[#F8F4FF] h-40 mt-12"></div>
        <div className="border rounded px-1 bg-[#F8F4FF] w-1/4 h-10 mt-12"></div>
      </div>
    </div>
  );
};

export default SkeletonDetail;
