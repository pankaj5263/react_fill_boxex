import { useState } from 'react';
import Cell from './Cell';
import './App.css';

function App() {
  const config = [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
  ];
  const [colorArray, setColorArray] = useState([]);
  const [isDeactivate, setDeactivate] = useState(false);

  const onDeselectHandler = () => {
    setDeactivate(true);
    let timerId = setInterval(() => {
      setColorArray((arr) => {
        const newArray = arr.slice();
        newArray.shift();
        if (newArray.length == 0) {
          clearInterval(timerId);
          setDeactivate(false);
        }
        return newArray;
      });
    }, 300);
  };

  const onClickHandler = (e, index) => {
    const newOrder = [...colorArray, index];
    setColorArray(newOrder);
    // This will check the length of colorArray equals with config element array;
    if (newOrder.length == config.flat().filter(Boolean).length) {
      onDeselectHandler();
    }
  };

  return (
    <>
      <div className="wrapper">
        {config.flat().map((value, index) => (
          <Cell
            onClickHandler={onClickHandler}
            colorArray={colorArray}
            index={index}
            show={!!value}
          />
        ))}
      </div>
    </>
  );
}

export default App;
