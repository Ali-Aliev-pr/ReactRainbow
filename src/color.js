import React from "react";
import Letter from "./letter";
import Number from "./number";

class Color extends React.Component {
    render() {
        const sli = {
            backgroundColor: this.props.bg,
            display: "flex",
            justifyContent: "center",
            gap: 20
        };
        return (<div className="color" style={sli}>
                {<Number num={this.props.num+1}/>}
                {this.props.bg.split('').map(chr => <Letter char={chr}/>)}
            </div>)
    }
}

export default Color;