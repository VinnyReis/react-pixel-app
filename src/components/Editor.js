import { useReducer } from 'react';
import Canvas from './Canvas';

const initialCanvas = [
  ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'],
  ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'],
  ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'],
  ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'],
  ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'],
  ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee']
];

const pixelMapReducer = (canvas, action) => {
  if(action.type === 'PAINT_PIXEL'){
    canvas[action.position.y][action.position.x] = '#a2b5b6';
    return [...canvas];
  }
}

function Editor(){
  const [ canvas, pixelMap] = useReducer(pixelMapReducer, initialCanvas);

  return(
    <Canvas matrix={canvas} pixelMap={pixelMap}/>
  )
} export default Editor;