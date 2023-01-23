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
    new Array(x).fill('#ffffff')
  );
}

function Editor(){
  const [canvas, pixelMap] = useReducer(pixelMapReducer, createNewPixelMap({x:15, y:15}));
  const selectedColor = useRef('#000000');

  const handlePixelClick = (position) => {
    pixelMap({ type: 'PAINT_PIXEL', position, color: selectedColor.current })
  }

  return(
    <EditorContext.Provider value={{selectedColor}}>
      <div className='editor'>
        <Canvas matrix={canvas} onPixelClick={handlePixelClick}/>
        <ColorPalette selectedColor={selectedColor}/>
      </div>
    </EditorContext.Provider>
  )
} export default Editor;