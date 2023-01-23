import { useContext } from 'react';
import { EditorContext } from './Editor';

function Pixel({ color, position, size, pixelMap }){

  const {selectedColor} = useContext(EditorContext);

  return(
    <div
      className='pixel'
      style={{ width: `${size}%`, paddingTop: `${size}%`, backgroundColor: color }}
      onClick={() => pixelMap({ type: 'PAINT_PIXEL', position, color: selectedColor.current })}
    />
  )
} export default Pixel;