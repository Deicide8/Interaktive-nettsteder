function Alert({ handleInputValue, handleOnClick }) {
  return (
    <>
      <button onClick={handleOnClick}>Click</button>
      <input onChange={handleInputValue} type="text" />
    </>
  );
}

export default Alert;
