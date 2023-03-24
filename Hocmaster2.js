import { Outlet } from "react-router-dom";
import HocMaster from "./HocMaster";
function Master2()
{
return(<div>
    <HocMaster/>
<Outlet/>
</div>)
}
export default Master2;