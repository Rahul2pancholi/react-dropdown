import React,{Component} from 'react'
import DropDown from '../../component/DropDown/component'


export default  class Home extends Component<any,any>{
     colors : Array<string>=["red","yellow","green","blue"]

render(){

    return (
    <div >
        <DropDown searchable={true} multiSelect={true} data={this.colors}/>
    </div>

    )
}

}