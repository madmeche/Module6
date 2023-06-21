function Cats(props) {
  const { name, latinName, image } = props;
  return (
    <li>
   <h1>Big Cats</h1>
   <h3>{name}</h3><span>{latinName}</span>
   <div className= 'image'>{image}</div>
    </li>
  );
}

export default Cats;
