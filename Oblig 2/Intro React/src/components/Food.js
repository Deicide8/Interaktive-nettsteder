const Food = ({ food }) => {
  return food.map((foodItem) => <li key={foodItem}>{foodItem}</li>);
};

export default Food;
