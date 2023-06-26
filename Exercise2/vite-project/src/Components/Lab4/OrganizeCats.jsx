// //can't get list const to work across the import. reverse and sort are in Lab2 BigCats

// import React from "react";
// import BigCats from "../Lab2/BigCats/BigCats";

// //insert image using URL
// //use push to insert upon a button click

// function OrganizeCats() {
  
//     const cats = <BigCats/>

// //   const handleSortCats = () => {};

// const handleReverseCats = () => {
//   let reverseCat = [...currentBigCats];
//   reverseCat.reverse();
//   setCurrentBigCats(reverseCat);
//   }

// const handleSortCats = () => {
//     const sortCats = [...cats].sort((a,b) => {
//         const nameA = a.name.toUpperCase();
//         const nameB = b.name.toUpperCase();
//         if (nameA > nameB){
//             return -1;
//         }
//         if (nameA < nameB){
//             return 1;
//         }
//         return 0;
// })

// setCurrentBigCats(sortCats)
//     };
// //sort

//   return (
//     <>
//       <ul>{cats}</ul>
//       <button onClick={handleReverseCats}>Reverse</button>
//     </>
//   );
// }
// export default OrganizeCats;
