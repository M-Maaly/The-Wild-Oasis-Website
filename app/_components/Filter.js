function Filter() {
  return (
    <div className="border border-primary-800 flex">
      <button className="p-5 border-r border-primary-800 hover:bg-primary-700 w-full">
        All cabins
      </button>
      <button className="p-5 border-r border-primary-800 hover:bg-primary-700 w-full">
        Small (1-3)
      </button>
      <button className="p-5 border-r border-primary-800 hover:bg-primary-700 w-full">
        Medium (4-7)
      </button>
      <button className="p-5 hover:bg-primary-900 w-full">Large (8+)</button>
    </div>
  );
}

export default Filter;
