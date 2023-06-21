import { useState } from "react";
// import React from "react";

function Emoji() {
    const [Face, newFace] = useState('😀');

    const handleChangeFace = () => {
        newFace(Face === "😀" ? "🤩" : "🤗");
    }
    return (
        <div>
            <button onClick = {() => newFace("🤩")}>Get Excited</button>
            <button onClick={handleChangeFace}>Try Again</button>
            {/* <span><img src={Face} alt="Face" /></span> */}
            </div>
            );
            }
            export default Emoji;










// function Emoji(props) {
//   const Face = useState("smiley");

//   const handleChangeFace = () => {
//     let newFace = "star eyes";
//     if (Face === "smiley") {
//       newFace = "star eyes";
//     } else {
//       newFace = " ";
//     }
//     {props.newFace}
//     };
//   return (
//     <div>
//       <button onClick={() => handleChangeFace()}>{Face}</button>
//     </div>
//   );
// }


