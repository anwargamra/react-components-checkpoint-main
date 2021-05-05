import React from 'react'
import Profile from './Sagrada Familia.jpg'
function ProfilePhoto() {
    const mystyle = {
        width :"30%",
        height:"auto"
    }
    return (
        <div>
            <img src={Profile} style={mystyle} alt ='hello' roundedCircle />
            
        </div>
    )
}

export default ProfilePhoto
