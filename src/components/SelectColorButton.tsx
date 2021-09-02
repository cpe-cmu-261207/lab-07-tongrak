import { useState } from "react"
import {UserStorage, setUserSelected} from '../stores/UserStore'

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {
  
  //modify this function to highlight correctly
  const computeRingSize = () => {
    // return ""
    // if(clickState){
    //   return "ring-8 ring-green-400"
    // }else{
    //   return ""
    // }
    const state = UserStorage.useState();
    if(color == state.userSelected){
      // highlight this block
      return "ring-8 ring-green-400"
    }else{
      // de-highlight this block
      return ""
    }
    
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} onClick={() => {setUserSelected(color)}}
    >
    </div>
  )
}

export default SelectColorButton