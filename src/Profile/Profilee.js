import React , { Component } from "react";
 class C extends Component{
constructor(){
    super();
    this.state={
        fullName:"Jandoubi chaima",
        bio:"hhhhhhhhhh", 
        imgSrc:"//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg", 
        profession:"student"
    };
}
    render(){
        return(
            <div>
                <h1>Profile app</h1>
                {this.state.imgSrc}
                fullName:{this.state.fullName}
                bio:{this.state.bio} 
                profession:{this.state.profession}
            </div>
        );
    }
}
export default C;