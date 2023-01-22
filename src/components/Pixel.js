function Pixel({ color, position, pixelMap }){
  return(
    <div
      className='pixel'
      style={{ width: '30px', height: '30px', backgroundColor: color }}
      onClick={() => pixelMap({ type: 'PAINT_PIXEL', position })}
    />
  )
} export default Pixel;