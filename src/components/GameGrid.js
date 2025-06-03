import React from 'react';
import ColorSquare from './ColorSquare';
import Checker from './Checker';
import '../styles/GameGrid.css';

function GameGrid({ colorGrid, currentRow, input, resultGrid }) {
  const rowSize = 8;
  const columnSize = 5;

  function renderColumns(rowIndex, showInput) {
    const columns = [];

    for (let i = 0; i < columnSize; i++) {
      const color = input[i];
      const inputColor = color && showInput ? color : {};
      const key = 'row-' + rowIndex + 'column-' + i;

      let gridColor = null;

      if (colorGrid[rowIndex]) {
        gridColor = colorGrid[rowIndex][i];
      }

      const colorObj = showInput ? inputColor : gridColor;

      columns.push(<ColorSquare {...colorObj} key={key} />);
    }

    let result = resultGrid[rowIndex] ? resultGrid[rowIndex] : {};

    columns.push(<Checker {...result} key={'checker-' + rowIndex} />);

    return columns;
  }

  function renderRows() {
    const rows = [];

    for (let i = 0; i < rowSize; i++) {
      const key = 'row-' + i;
      const rowIndex = i;
      const showInput = currentRow === i;

      rows.push(
        <div key={key} className="grid-row">
          {renderColumns(rowIndex, showInput)}
        </div>
      );
    }

    return rows;
  }

  return <div className="container-rows">{renderRows()}</div>;
}

export default GameGrid;
