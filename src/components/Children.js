import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


export default function Children() {

    let count = useSelector(state => state.count)
    let color = useSelector(state => state.color)
    let boxArray = useSelector(state => state.boxArray)
    let colorEach = useSelector(state=> state.colorEach)
    let boxNum = useSelector(state => state.boxNum)

    const dispatch = useDispatch()


    if (colorEach == null){
        colorEach = color
    }

    return (
        <div>
            <h2>This is children</h2>
            {boxArray.map((item,index) =>{
                
                if(index == item){
                    console.log("same")
                }
       
                return <div className="box" style={{ backgroundColor:`${colorEach}` }}><h3>Im a box {item}</h3>
                
                    <input type="text" onChange={ (e) => dispatch({type:"ColorEach",payload:{ colorEach:(e.target.value), boxNum:index }})} ></input>
                </div>
       
   
            })}
        </div>
    )
}
