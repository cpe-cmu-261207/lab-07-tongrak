import { paintItWhite , SpicyCanvas } from'../stores/PixelPainterStore'

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={paintItWhite}>Clear</button>
      <button className="w-36" onClick={SpicyCanvas} >Random color</button>
    </div>
  )
}

export default Utility