import { useEffect, useState } from 'react';
import SuggestionsList from "./SuggestionsList";
import { debounce } from 'lodash';
import MoviesService from '../services/movies-service';

const searchMovies = debounce(MoviesService.getMovies, 250);

export default function TypeaheadInput({ onSelectMovie }) {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = debounce(() => setFocused(false), 150)

  useEffect(() => {
    if (!inputText) return;

    searchMovies(inputText, (response) => {
      setSuggestions(response.results)
    })
  }, [inputText]);


  return (
    <div className="flex flex-col justify-center items-center">
      <input
        className="text-lg text-primary border-primary border rounded-md w-48 focus:w-96 transition-all focus:outline-none p-1 mb-2"
        placeholder="Search"
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {focused && suggestions.length > 0 && <SuggestionsList suggestions={suggestions} onItemClick={onSelectMovie} />}
    </div>
  );
}
