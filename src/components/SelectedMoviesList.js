const SelectedMoviesList = ({ selectedMovies }) => {
  return (
    <div className="selected-movies-list">
      <ul
        className="w-96 text-lg bg-white"
      >
        {selectedMovies.map((item) => (
          <li key={item.id}
            className={"p-1"}>
            <span className="">{item.title || item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedMoviesList;