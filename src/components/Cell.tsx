import { PixelPainterStore } from "../stores/PixelPainterStore"
import { setSinglePixel } from '../stores/PixelPainterStore'
import { UserStorage } from '../stores/UserStore'

type CellProps = {
  x: number;
  y: number;
}

const Cell = ({ x, y }: CellProps) => {

  const state = PixelPainterStore.useState();
  const userState = UserStorage.useState();

  return (
    <td className="w-6 h-6 cursor-pointer" style={{backgroundColor: state.canvas[y][x]}} onClick={()=>{
      setSinglePixel(y,x,userState.userSelected);
      console.log(x + " " + y + " Just got click, and painted it " + userState.userSelected);
      }}>
    </td>
  )
}

export default Cell