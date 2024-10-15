import React, {useContext, useState} from 'react'
import filterIcon from '../../Assets/Images/Tuning.svg'
import downIcon from '../../Assets/Images/Down.svg'
import { TiAdjustBrightness } from "react-icons/ti";
import { IoMoon } from "react-icons/io5";

import './Navbar.css'
import { userContext } from '../../Context/UserContext';

export default function Navbar(props) {
    const [toggleFilter, settoggleFilter] = useState(false);
const {darkMode,setDarkMode,setMode}=useContext(userContext)
    function handleDisplayToggle(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleGroupValue(e.target.value);
        }
    }
    function handleOrderingValue(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleOrderValue(e.target.value);
        }
    }
    
  return (
    <>
        <section className="nav" style={darkMode ? { backgroundColor: '#3a3737d2' }:{}}>
            <div className="nav-container" style={{display:'flex', justifyContent: 'space-between', width:'full'}}>
                <div>
                    <div className="nav-disp-btn" onClick={handleDisplayToggle} style={darkMode ? {boxShadow:'black'}:{}}>
                        <div className="nav-disp-icon nav-disp-filter">
                            <img src={filterIcon} alt="icon" />
                        </div>
                        <div className="nav-disp-heading" style={darkMode ? {boxShadow:'black' }:{}}>
                            Display
                        </div>
                        <div className="nav-disp-icon nav-disp-drop">
                            <img src={downIcon} alt="icon" />
                        </div>
                    </div>
                    <div className={toggleFilter ? "nav-disp-dropdown nav-disp-dropdown-show" : "nav-disp-dropdown"}>
                        <div className="nav-disp-filters">
                            <div className="nav-dropdown-category">
                                Grouping
                            </div>
                            <div className="nav-dropdown-selector">
                                <select value={props.groupValue} onChange={handleDisplayToggle} className='nav-selector' name="grouping" id="">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="nav-disp-filters">
                            <div className="nav-dropdown-category">
                                Ordering
                            </div>
                            <div className="nav-dropdown-selector">
                                <select value={props.orderValue} onChange={handleOrderingValue} className='nav-selector' name="grouping" id="">
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
              {darkMode ? <div onClick={()=>setMode(darkMode)} style={{background:"white", display:'flex',justifyContent:'center',alignItems:'center', padding:'5px', borderRadius:'20px',cursor:'pointer'}}>
                <TiAdjustBrightness style={{fontSize:"30px"}}/>
                </div> :<div onClick={()=>setMode(darkMode)} style={{background:"black",display:'flex',justifyContent:'center',alignItems:'center', padding:'10px', borderRadius:'20px',cursor:'pointer'}}>
                <IoMoon style={{fontSize:"20px" ,color:'white'}}/>
                </div>}
            </div>
        </section>
    </>
  )
}
