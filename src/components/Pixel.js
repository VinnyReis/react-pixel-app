function Pixel({ color, position, size, pixelMap }){

  return(
    <div
      className='pixel'
      style={{ width: `${size}%`, paddingTop: `${size}%`, backgroundColor: color }}
      onClick={() => pixelMap({ type: 'PAINT_PIXEL', position })}
    />
  )
} export default Pixel;