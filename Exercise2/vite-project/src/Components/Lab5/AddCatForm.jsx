import { useState } from "react";

function AddCatForm(onAddCat) {
  const [name, setName] = useState('');
  const [latin, setLatin] = useState('');

 

  const handleSubmit= (e) => {
  setName(e.target.name.value);
  setLatin(e.target.latin.value);

//   //rerender the component with the updated data
  setCurrentBigCats(handleSubmit);
  }; 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Latin Name"
          value={latin}
          onChange={(e) => setLatin(e.target.value)}
        />
        <button type="submit">Add Big Cat</button>
      </form>
    </>
  );
}

export default AddCatForm;
