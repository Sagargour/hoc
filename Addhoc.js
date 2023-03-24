import React, { useState } from "react";
import Hoccomponent from "./Hoccomponent";

function Addhoc(){

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
    var c =parseInt(a) + parseInt(b)
    SetC(c)
    e.preventDefault()
}
    

return(<div>

    <input type="text" onChange={fun1} placeholder="enter first number"  />
    <br/>
    <input type="text" onChange={fun2} placeholder="enter second number"/>
    <br/>
    <input type="button" onClick={fun3} value="Add"/>
    {c}
</div>)

}
Addhoc = Hoccomponent(Addhoc)
export default Addhoc;
