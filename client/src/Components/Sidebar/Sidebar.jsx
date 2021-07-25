import React, { useState } from 'react'
import { ReactComponent as Dashboard } from "../../Images/dashboard.svg"
import { ReactComponent as Table } from "../../Images/table.svg"
import logout from '../../Images/logout.svg'
import "./sidebar.css"

function SideBar() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className = "sidebar__container">
      <div className = "buttons__container">
        <div className = "button1__container" onClick = {() => setActiveTab(0)} 
        style = {{color: `${activeTab === 0 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}>
          <p style={{marginTop: "9px"}}>Dash</p>
          <div className = "button1">
            <Dashboard style = {{marginBottom: "15px", marginLeft: "10px", width: "100%", fill: `${activeTab === 0 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}/>
          </div>
        </div>
        <div className = "button2__container" onClick = {() => setActiveTab(1)} 
        style = {{color: `${activeTab === 1 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}>
          <p style={{marginTop:"9px"}}>Table</p>
          <div className = "button2">
            <Table style = {{marginBottom: "15px", marginLeft: "10px", width: "100%", fill: `${activeTab === 1 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}/>
          </div>
        </div>
        {/* <div className="button3">
          <Logout style={{fill: 'red', marginBottom: "15px",  width: "100%",}}/>
        </div> */}
        <div className="button3">
          <img src={logout} style={{marginTop:"450px",}}/>
        </div>
        {/* <div className = "button2__container" onClick = {() => setActiveTab(1)} 
        style = {{color: `${activeTab === 1 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}>
          <p style={{marginTop:"9px"}}>Table</p>
          <div className = "button3">
            <Table style = {{marginBottom: "15px", marginLeft: "10px", width: "100%", fill: `${activeTab === 1 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}/>
          </div>
        </div> */}
      
      </div>
    </div>
  )
}

export default SideBar