const SkeletonEmployItem = () => {
  return (
    <div className="animate-pulse h-full space-x-5 mt-8">
      <div className="bg-gray-300 h-[109px] w-[1240px] rounded-md flex justify-between pt-8 px-5">
        <div className="bg-gray-200 h-10 w-[240px] rounded-md"></div>
        <div className="bg-gray-200 h-10 w-[240px] rounded-md"></div>
        <div className="bg-gray-200 h-10 w-[240px] rounded-md"></div>
        <div className="bg-gray-200 h-10 w-[240px] rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonEmployItem;
