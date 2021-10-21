import React from "react";

class Letter extends React.Component {
    render() {
        const letterStyle = {
            width: 20,
            borderRadius: 4,
            backgroundColor: "#0002"
        }
        return <div style={letterStyle}>{this.props.char}</div>
    }
}

export default Letter;