import React from 'react';
const style = {
    backgroundColor: "#343333",
    color: "#fff",
    border: "1px solid red"
}
const spanStyle = {
    margin: '10px',

}
function User(props) {
    return (
        <>
            <div style={style}>
                <span style={spanStyle}>{props.data.name}</span>
                <span style={spanStyle}>{props.data.email}</span>
                <span style={spanStyle}>{props.data.contact}</span>
            </div>
        </>
    )
}

export default User;