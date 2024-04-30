import React from 'react';
import './App.css';
const Cell = (props) => {
  const { show, index, onClickHandler, colorArray, onDeselectHandler, length } =
    props;
  if (colorArray.length == length) {
    onDeselectHandler();
  }
  const setcolor = !!colorArray.includes(index);

  return (
    <div
      className="cell"
      style={{
        visibility: show ? 'visible' : 'hidden',
        backgroundColor: setcolor ? 'green' : 'transparent',
      }}
      onClick={(e) => onClickHandler(e, index)}
      disable={setcolor}
    ></div>
  );
};

export default Cell;
