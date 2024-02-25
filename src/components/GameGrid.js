import React from 'react';
import ColorSquare from './ColorSquare';
import Checker from './Checker';
import '../styles/GameGrid.css';

function GameGrid({ currentRow, input }) {
  const rowSize = 8;
  const columnSize = 5;

  function renderColumns(rowIndex, showInput) {
    const columns = [];

    for (let i = 0; i < columnSize; i++) {
      const color = input[i];
      const colorObj = color && showInput ? color : {};

      const key = 'row-' + rowIndex + 'column-' + i;

      columns.push(<ColorSquare {...colorObj} key={key} />);
    }

    columns.push(<Checker key={'checker-' + rowIndex} />);

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

  return <div>{renderRows()}</div>;
}

export default GameGrid;
