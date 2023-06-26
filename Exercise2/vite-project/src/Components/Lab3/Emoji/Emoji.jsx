import { useState } from "react";
// import React from "react";

function Emoji() {
    const [face, newFace] = useState('😀');

    const handleChangeFace = () => {
        newFace(face === "😀" ? "🤩" : "🤗");
    }
    return (
        <div>
            
            <button onClick={handleChangeFace}>Get Excited</button>
            <p>{face}</p>
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


