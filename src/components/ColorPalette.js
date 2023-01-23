import React, { useState, useEffect } from 'react';

function ColorPalette(props){

  const [selectedColor, setSelectedColor] = useState(props.selectedColor.current);

  const colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7','#3f51b5', '#2196f3',
    '#03a9f4', '#00bcd4', '#ffffff', '#4caf50', '#8bc34a', '#cddc39',
    '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#000000'
  ];

  useEffect(() => {
    props.selectedColor.current = selectedColor;
  }, [selectedColor, props.selectedColor])

  return(
    <div className='color-palette'>
      {colors.map(color =>
        <div
          key={color}
          className={`color ${color === selectedColor && 'selected'}`}
          style={{ backgroundColor: color}}
          onClick={() => setSelectedColor(color)}
        />
      )}
    </div>
  )
} export default React.memo(ColorPalette);