import React from "react";



function Cats(props) {
const { id, name, latinName, image, onDeleteCat } = props;

const handleDeleteCat = () => {
    onDeleteCat(id);
};

return(
    <li>
        <h3>{name}</h3> <span>({latinName})</span>
        <div>
        <img id={id} src={image} alt={name} width="200px"
        />
        </div>
        <button onClick={handleDeleteCat}>Remove Cat</button>
        
    </li>
)
}

export default Cats