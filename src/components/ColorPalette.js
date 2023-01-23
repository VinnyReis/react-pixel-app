import { useState, useEffect, useContext } from 'react';
import { EditorContext } from './Editor';

function ColorPalette(){

  const [selectedColor, setSelectedColor] = useState('#000000');
  const editorContext = useContext(EditorContext);

  const colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7','#3f51b5', '#2196f3',
    '#03a9f4', '#00bcd4', '#ffffff', '#4caf50', '#8bc34a', '#cddc39',
    '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#000000'
  ];

  useEffect(() => {
    editorContext.selectedColor.current = selectedColor;
  }, [selectedColor])

  return(
    <div className='color-palette'>
      {colors.map(color =>
        <div
          key={color}
          className={`color ${color === selectedColor && 'active'}`}
          style={{ backgroundColor: color}}
          onClick={() => setSelectedColor(color)}
        />
      )}
    </div>
  )
} export default ColorPalette;