import { useReducer } from 'react';
import Canvas from './Canvas';

const pixelMapReducer = (canvas, action) => {
  if(action.type === 'PAINT_PIXEL'){
    canvas[action.position.y][action.position.x] = '#a2b5b6';
    return [...canvas];
  }
}

const createNewPixelMap = ({x, y}) => {
  return (new Array(y)).fill().map(() => 
    new Array(x).fill('#eee')
  );
}

function Editor(){
  const [ canvas, pixelMap] = useReducer(pixelMapReducer, createNewPixelMap({x:15, y:15}));

  return(
    <Canvas matrix={canvas} pixelMap={pixelMap}/>
  )
} export default Editor;