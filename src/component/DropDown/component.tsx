import React,{Component} from 'react'
import './style.css'
import ArrowDown from "../../asset/icon/keyboard_arrow_down.svg"
export default  class DropDown extends Component<any,any>{
    colors : Array<string>=["red","yellow","green","blue"]
constructor(props : any)
{  
    super(props);
this.state={
    placeholder : "Colours",
    dropdownVisiblity: false
}
}
_handelDropDownvisiblity =()=> {
    const {dropdownVisiblity,placeholder}=this.state 
this.setState({ dropdownVisiblity:!dropdownVisiblity, placeholder: placeholder === ""? "Colours" : ""});
console.log(this.state)
}
_renderDropDownVisiblity=()=>{
    const {dropdownVisiblity} = this.state;
    if(!dropdownVisiblity)
    {
        return;
    }
    return (<div className="bg-yellow pd-10">
    <input type="checkbox"/>
    {
    this.colors.map((value,index)=>{
        return <div className="d-flex jc-space-between ">
            <div ><input type="checkbox"/></div>
             <div>{value}</div>
        </div>
    }) 
    }
    <div>
        <button>clear</button>
        <button>submit</button>
    </div>
    </div>) 
}

_handelFocus=()=> {}
render(){
const {dropdownVisiblity,placeholder}=this.state
    return (
    <div  className="component d-flex col ai-center">
    <div className="drop-down  bg-yellow border-solid" onBlur={ this._handelDropDownvisiblity} onFocus={this._handelDropDownvisiblity} >  
        <input className="h-40 border-none"placeholder={placeholder} />
        <img src={ArrowDown} alt="arrow down"/>
    </div>
    <div>
{this._renderDropDownVisiblity()}
    </div>
   
    </div>

    )
}

}