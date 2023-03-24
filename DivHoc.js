import React, { useState } from "react";
import Hoccomponent from "./Hoccomponent";
function DivHoc(){

    const [a,SetA]=useState(0)
    const [b,SetB]=useState(0)
    const [c,SetC]=useState(0)
    function fun1(e)
    { 
        SetA (e.target.value)
    }
    function fun2(e)
    {
        SetB( e.target.value)

    }
    function fun3(e)
    {
    var c =parseInt(a) / parseInt(b)
    SetC(c)
    e.preventDefault()
}
    

return(<div>

        ENTER 1ST NO:-<input type="text" onChange={fun1} placeholder="enter first number"/>
    <br/>
    ENTER 2ND NO:- <input type="text" onChange={fun2} placeholder="enter second number"/>
    <br/>
         CLICK:- <input type="button" onClick={fun3} value="Div"/>
    {c}
</div>)

}
DivHoc = Hoccomponent(DivHoc)
export default DivHoc;
