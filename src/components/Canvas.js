import Row from './Row';
import Pixel from './Pixel';

function Canvas({ matrix, pixelMap }){

  const pixelSize = 100 / matrix[0].length;

  return(
    <div className='canvas'>
      {matrix.map((row, y) => 
        <Row key={y}>
          {row.map((pixel, x) =>
            <Pixel key={x} color={pixel} position={{x,y}} size={pixelSize} pixelMap={pixelMap}/>
          )}
        </Row>
      )}
    </div>
  )
} export default Canvas;