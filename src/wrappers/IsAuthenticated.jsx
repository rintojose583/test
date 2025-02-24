import React from 'react'
import { Navigate } from 'react-router-dom'

export const IsAuthenticated = ({children}) => {
  
    // let admin = localStorage.getItem("admin")
    let admin = true

    return admin ? children : <Navigate to="/" />
}
