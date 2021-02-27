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
    dropdownVisiblity: false,
    searchQuery:"",
    seletedItems:[]
}
}
_handelDropDownvisiblity =()=> {
    const {dropdownVisiblity,placeholder}=this.state 
this.setState({ dropdownVisiblity:!dropdownVisiblity, placeholder: placeholder === ""? "Colours" : ""});
console.log(this.state)
}
_renderDropDownVisiblity=()=>{
    const {dropdownVisiblity,searchQuery} : any = this.state;
    if(!dropdownVisiblity)
    {
        return;
    }
    return (<div className="bg-yellow pd-10 pos-absolute">
    <input type="checkbox"/>
    {
    this.colors.map((value,index)=>{
        if(value.match((new RegExp(searchQuery,'i'))))
         return (<div className="d-flex jc-space-between ">
            <div key={index} ><input value={value} onChange={this._handelCheckedItems}type="checkbox"/></div>
             <div>{value}</div>
        </div>)
    }) 
    }
    <div>
        <button>clear</button>
        <button>submit</button>
    </div>
    </div>) 
}

_handelFocus=()=> {}
_handelCheckedItems = (e : any)=> {
    const {seletedItems}=this.state 
if(e.target.checked)
{
    this.setState({seletedItems:[...seletedItems,e.target.value]})
    return;
}
seletedItems.splice(seletedItems.indexOf(e.target.value),1);

this.setState({seletedItems});



}
render(){
const {dropdownVisiblity,placeholder,searchQuery}=this.state
    return (
    <div  className="component d-flex col ai-center">
    <div className="drop-down  bg-yellow border-solid"  onFocus={this._handelDropDownvisiblity} >  
        <input value={searchQuery} className="h-40 border-none" onChange={(e) => this.setState({searchQuery: e.target.value})} placeholder={placeholder} />
        <img src={ArrowDown} alt="arrow down"/>
    </div>
    <div>
{this._renderDropDownVisiblity()}
    </div>
   
    </div>

    )
}

}