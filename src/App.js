import { useCallback, useEffect, useState } from 'react';
import './App.css';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import { userContext } from './Context/UserContext';
// import useProduct from './Hooks/useFetchData';
import Model from './components/Model/Model';
import fetchData from './Hooks/useFetchData';
function App() {
  const [allTickets,setAllTickets]=useState([]);
  const statusList = ['In progress', 'Backlog', 'Todo', 'Done', 'Cancelled']
  const [userList,setUserlist] = useState(['Anoop sharma', 'Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh'])
  const priorityList = [{name:'No priority', priority: 0}, {name:'Low', priority: 1}, {name:'Medium', priority: 2}, {name:'High', priority: 3}, {name:'Urgent', priority: 4}]
  const [groupValue, setgroupValue] = useState( 'status')
  const [orderValue, setorderValue] = useState('title')
  const [ticketDetails, setticketDetails] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [popUp, setPopUp] = useState(false);

  useEffect(()=>{
   async function fun(){
    let z=await fetchData(setAllTickets);
    let y= localStorage.getItem("orderValue");
    if(y){
     setorderValue(y);
     orderDataByValue(z,y);
     
    }
    else {
     orderDataByValue(z,orderValue);

   }
   
   }
   
   fun();
     let x= localStorage.getItem("groupValue");
     if(x)setgroupValue(x);
    
     let z= JSON.parse(localStorage.getItem("darkMode"));
     if(z)setDarkMode(z);
console.log("daarkkkkkkkk.",z,darkMode);
  },[])
  function setMode(val){
    let currentMode=!val;
    localStorage.setItem("darkMode",currentMode);
    setDarkMode(currentMode);
  }

  console.log("data at app...", allTickets);
 useEffect(()=>{
if(allTickets.length>0)orderDataByValue(allTickets,orderValue);
 },[allTickets])
  
    const orderDataByValue = async (cardsArry,val) => {

      console.log("title.........",cardsArry[0].title)
    if (val === 'priority') {
      cardsArry.sort((a, b) => b.priority - a.priority);
    } else if (val === 'title') {
        cardsArry.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
     
    }
    await setticketDetails(cardsArry);
  }
  // , [orderValue, setticketDetails]);
  function handleGroupValue(value){
    setgroupValue(value);
    localStorage.setItem("groupValue",value);
      // localStorage.getItem("orderValue");
    console.log("values......",value);
  }

  function handleOrderValue(value){
    setorderValue(value);
    orderDataByValue(allTickets,value)
    localStorage.setItem("orderValue",value);
    console.log("values......",value);
  }
  
  return (
    <userContext.Provider  value={{darkMode,setDarkMode,setMode,popUp,setPopUp,allTickets,setAllTickets,userList,setUserlist,orderDataByValue}} >
       <NavBar
           groupValue={groupValue}
           orderValue={orderValue}
           handleGroupValue={handleGroupValue}
           handleOrderValue={handleOrderValue}
       />
       <section className={`board-details`} style={darkMode ? { backgroundColor: 'gray' }:{}}>
        <div className="board-details-list">
          
            
              { groupValue === 'status' && <>
                {
                  statusList.map((listItem) => {
                    return(<List
                      groupValue='status'
                      orderValue={orderValue}
                      listTitle={listItem}
                      listIcon=''
                      statusList={statusList}
                      ticketDetails={allTickets}
                    />)
                  })
                }
              </>}
            { groupValue === 'user' && <>
              {
                userList.map((listItem) => {
                  return(<List
                    groupValue='user'
                    orderValue={orderValue}
                    listTitle={listItem}
                    listIcon=''
                    userList={userList}
                    ticketDetails={allTickets}
                  />)
                })
              }
              </>}
           { groupValue === 'priority' && <>
              {
                priorityList.map((listItem) => {
                  return(<List
                    groupValue='priority'
                    orderValue={orderValue}
                    listTitle={listItem.priority}
                    listIcon=''
                    priorityList={priorityList}
                    ticketDetails={allTickets}
                  />)
                })
              }
            </>}
          
          
        </div>
      </section>

      {popUp &&  <Model/> }
    </userContext.Provider>
  );
}

export default App;
