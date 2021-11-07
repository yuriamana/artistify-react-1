export default function SearchBar(props) {

  const handleChange = async (e) => {
    const searchString = e.target.value; // the search text input's value
    console.log(searchString);
  };

  return (
    <div className="search-bar">
      <input
        className={`input ${!props.status ? "is-active" : ""}`}
        name="search-query"
        type="text"
        placeholder="search artists or albums"
        onChange={handleChange}
      />
    </div>
  );
}
