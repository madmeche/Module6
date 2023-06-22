import Cheetah from '../BigCats/CatImages/Cheetah.jpg'
import Cats from "./Cats";
import { useState } from "react";

function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: {Cheetah} ,
      // "../CatImages/Cheetah.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image: "../CatImages/Cougar.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image: "../CatImages/Jaguar.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "../CatImages/Leopard.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image: "../BigCats/CatImages/Lion.jpg",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image: "../BigCats/CatImages/Snow Leopard.jpg",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "../CatImages/Tiger.jpg",
    },
  ];

  const [currentBigCats, setCurrentBigCats] = useState(cats);

  const handleReverseCats = () => {
    let reverseCat = [...currentBigCats];
    reverseCat.reverse();
    setCurrentBigCats(reverseCat);
    console.log("reverse");
  };

  const handleSortCats = () => {
    console.log("sort");
    const sortCats = [...currentBigCats].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    setCurrentBigCats(sortCats);
  };

  const handleFilterCat = (latinName) => {
    
    let filterCat = currentBigCats.filter((cats) => {
      let filterCatSplit= cats.latinName.split(' ')
      // cats.latinName.split(" ");
      filterCatSplit.toLowerCase() ;
      return filterCatSplit.latinName !== latinName
      }
    )
    setCurrentBigCats(filterCat);
  };

  const handleResetCats = () => {
    let resetCats = cats;
    setCurrentBigCats(resetCats);
  };

  // const handleAddCat = (newCatToAdd) => {
  //   let newCat = {
  //       ...newCatToAdd,
  //       id: currentBigCats.length +1
  //   }
  //   let newCats = [
  //     ...currentBigCats,
  //     newCat
  //   ]

  //   setCurrentBigCats(newCats)
  // }

  return (
    <div>
      <h1>Big Cats</h1>
      <ul className="catList">
        {currentBigCats.map((cat) => (
          <li key={cat.id}>
            <h2>{cat.name}</h2>
            <p>Latin Name: {cat.latinName}</p>
            <img src = {cat.image}></img>
          </li>
        ))}
      </ul>
      <button onClick={handleReverseCats}>Reverse</button>
      <button onClick={handleSortCats}>A-Z</button>
      <button onClick={() => handleFilterCat("panthera")}>Panthera Cats</button>
      <button onClick={handleResetCats}>Reset</button>
      {/* <button onClick={handleFilterCat}>Panthera</button> */}
    </div>
  );
}
export default BigCats;
