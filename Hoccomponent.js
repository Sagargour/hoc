import React,{Component} from 'react';
export default function Hoccomponent (UserComponent)
{
    return class extends Component{
        render()
        {
            return(<div>
                <h1> HOC HEADER CONTENT</h1>
                <UserComponent/>
                <h1>FOOTER CONTENT</h1>
            </div>)
        
        }
            
    }
}
    