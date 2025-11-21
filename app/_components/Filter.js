function Filter() {
  return (
    <div className="border border-primary-800 flex">
      <button className="p-5 border-r border-primary-800 hover:bg-primary-700 w-full">
        All cabins
      </button>
      <button className="p-5 border-r border-primary-800 hover:bg-primary-700 w-full">
        1-3 guests
      </button>
      <button className="p-5 border-r border-primary-800 hover:bg-primary-700 w-full">
        4-7 guests
      </button>
      <button className="p-5 hover:bg-primary-900 w-full">8+ guests</button>
    </div>
  );
}

export default Filter;
