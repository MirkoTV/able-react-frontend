import TypeaheadInput from "./TypeaheadInput";

export default function Form({ onSelectMovie }) {
  return (
    <div className="flex justify-center items-center mt-14">
      <TypeaheadInput onSelectMovie={onSelectMovie}/>
    </div>
  );
}
