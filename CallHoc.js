import React from "react";
import Hoccomponent from "./Hoccomponent";

class CallHoc extends React.Component
{
    render()
    {
        return(<div>
            <h1 >child component</h1>
        </div>)
    }

}
CallHoc= Hoccomponent(CallHoc);
export default CallHoc;