import { useState } from 'react';
import Form from "./Form";
import Header from "./Header";
import SelectedMoviesList from './SelectedMoviesList';

export default function App() {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const onSelectMovie = (selectedMovie) => {
    setSelectedMovies(oldSelectedMovies => [...oldSelectedMovies, selectedMovie]);
  };

  return (
    <div className="bg-light text-primary min-h-screen py-12">
      <Header />
      <div className="m-4 d-flex justify-content-center">
        <SelectedMoviesList selectedMovies={selectedMovies} />
      </div>
      <Form onSelectMovie={onSelectMovie} />
    </div>
  );
}
