import React from 'react';
import ColorSquare from './ColorSquare';
import '../styles/GameGrid.css';

function GameGrid() {
  const rowSize = 8;
  const columnSize = 5;

  function renderColumns(rowIndex) {
    const columns = [];

    for (let i = 0; i < columnSize; i++) {
      const key = 'row-' + rowIndex + 'column-' + i;

      columns.push(<ColorSquare key={key} className="color-square" />);
    }

    columns.push(<div key={'checker-' + rowIndex} className="checker"></div>);

    return columns;
  }

  function renderRows() {
    const rows = [];

    for (let i = 0; i < rowSize; i++) {
      const key = 'row-' + i;
      const rowIndex = i;

      rows.push(
        <div key={key} className="grid-row">
          {renderColumns(rowIndex)}
        </div>
      );
    }

    return rows;
  }

  return <div>{renderRows()}</div>;
}

export default GameGrid;
