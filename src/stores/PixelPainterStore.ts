import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const addCanvasSpice = () =>{
  const choices = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push(choices[Math.floor(Math.random()*(12))]);
    }
  }
  return output;
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas()
})

export const setSinglePixel = (x: number, y: number, colour: string) =>{
  PixelPainterStore.update(
    s => {
      s.canvas[x][y] = colour;
    }
  )
}

export const paintItWhite = () => {
  PixelPainterStore.update(
    s => {
      console.log("And they're all painted white")
      s.canvas = createEmptyCanvas();
    }
  )
}

export const SpicyCanvas = () => {
  PixelPainterStore.update(
    s => {
      console.log("And they're all spicy")
      s.canvas = addCanvasSpice();
    }
  )
}