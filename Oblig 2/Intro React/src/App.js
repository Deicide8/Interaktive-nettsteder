import Wrapper from './components/Wrapper';
import Food from './components/Food';
import MyComponent from './components/MyComponent';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  let isClicked = false;

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleOnClick() {
    console.log(inputValue);
  }

  return (
    <>
      <Wrapper>
        <MyComponent />
      </Wrapper>
      <ul>
        <Food food={['Pizza', 'Hamburger', 'Coke']} />
      </ul>
      <Alert
        handleInputValue={handleInputValue}
        handleOnClick={handleOnClick}
      />
      <p>{inputValue}</p>
    </>
  );
}

export default App;
