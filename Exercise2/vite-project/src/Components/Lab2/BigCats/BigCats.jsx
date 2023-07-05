import Cheetah from "../BigCats/CatImages/Cheetah.jpg";
import Cats from "./Cats";
import { useState } from "react";
import AddCatForm from "../../Lab5/AddCatForm";

function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image:
        "https://www.livemint.com/lm-img/img/2023/04/29/600x338/PTI03-27-2023-000272A-0_1682396467147_1682732373970.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image: "https://www.zoonewengland.org/media/663826/cougar3gallery.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwNidup82yrm5aL42A2rlGE8_pJvI84tXFw&usqp=CAU",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image:
        "https://www.dailypaws.com/thmb/oPYrRPz2uBCHFZRmwYpX6LfNQdk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-leopard-cub-131103994-2000-d85990e498a64ed08d0d24450ca2dd54.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaoQC7sp_k03unaETFclRCe6AiolUVHsXoQ&usqp=CAU",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image:
        "https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_snowleopard.jpg",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image:
        "https://media1.popsugar-assets.com/files/thumbor/_mxpBwbW-cd-DnuorNHN5sF29vE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/11/14/104/n/45101125/455f35fe6191b8449adc43.31973798_/i/tiger-king-where-is-cast-now.jpg",
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

  const handleFilterCat = () => {
    let filterCat = currentBigCats.filter((cats) => {
      let splitCat = cats.latinName.split(" ");
      if (cats.latinName.includes("Panthera")) return cats;
      console.log(splitCat);
      //[0] must = latinName
      // if ( [0] !== latinName )
      // return cats
      // could not get split to work with lowercase funtion and filter. nor calling it within the button to make it dynamic
    });

    setCurrentBigCats(filterCat);
  };

  const handleResetCats = () => {
    let resetCats = cats;
    setCurrentBigCats(resetCats);
  };

  const handleAddCat = (newCatToAdd) => {
    let newBigCat = [
        ...newCatToAdd,
        currentBigCats.length + 1
  ]

    let newBigCats = [
        ...currentBigCats,
        newBigCat,
    ];
    
    setCurrentBigCats(newBigCats);
  }

  const handleDeleteCat = (id) =>{
    const newList = currentBigCats.filter((cats) => cats.id !== id);
    setCurrentBigCats(newList)

    // console.log(id);
  }



  const catList = currentBigCats.map((cats) => (
    <div>
    <Cats
      id={cats.id}
      name={cats.name}
      latinName={cats.latinName}
      image={cats.image}
      onDeleteCat={handleDeleteCat}
    />
    </div>
  ));
 
  return (
    <div>
      <h1>Big Cats</h1>
      {/* <ul className="catList">
        {catList.map((cat) => (
          <li key={cat.id}>
            <h2>{cat.name}</h2>
            <p>Latin Name: {cat.latinName}</p>
            <img src={cat.image} height="150px"></img>
            <button type='button' onClick={handleDeleteCat}>Remove Cat</button>
          </li>
        ))}
      </ul> */}
      <ul>{catList}</ul>
      <button onClick={handleReverseCats}>Reverse</button>
      <button onClick={handleSortCats}>A-Z</button>
      {/* <button onClick={() => handleFilterCat("panthera")}>Panthera Cats</button> */}
      <button onClick={() => handleFilterCat()}>Panthera Cats</button>
      <button onClick={handleResetCats}>Reset</button>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  );
}
export default BigCats;
