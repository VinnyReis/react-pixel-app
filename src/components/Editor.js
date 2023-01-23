import { useReducer, useRef, createContext } from 'react';
import Canvas from './Canvas';
import ColorPalette from './ColorPalette';

export const EditorContext = createContext({});

const pixelMapReducer = (canvas, action) => {
  if(action.type === 'PAINT_PIXEL'){
    canvas[action.position.y][action.position.x] = action.color;
    return [...canvas];
  }
}

const createNewPixelMap = ({x, y}) => {
  return (new Array(y)).fill().map(() => 
    new Array(x).fill('#fff')
  );
}

function Editor(){
  const [canvas, pixelMap] = useReducer(pixelMapReducer, createNewPixelMap({x:15, y:15}));
  const selectedColor = useRef(0);

  return(
    <EditorContext.Provider value={{selectedColor}}>
      <div className='editor'>
        <Canvas matrix={canvas} pixelMap={pixelMap}/>
        <ColorPalette/>
      </div>
    </EditorContext.Provider>
  )
} export default Editor;