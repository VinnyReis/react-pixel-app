import React from 'react';

function Pixel({ color, position, size, onPixelClick }){

  return(
    <div
      className='pixel'
      style={{ width: `${size}%`, paddingTop: `${size}%`, backgroundColor: color }}
      onClick={() => onPixelClick(position)}
      onMouseOver={e => e.buttons === 1 && onPixelClick(position)}
    />
  )
} 

const shouldComponentUpdate = (prevProps, nextProps) => {
  return prevProps.color === nextProps.color;
}

export default React.memo(Pixel, shouldComponentUpdate);