import { useEffect, useState } from "react";
import axios from "axios";
  
export default async function fetchData(setData){

  try {
    
      const { data } = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment/"
      )

    //   async function refactorData(response){
        let ticketArray = []
        
            for(let i=0; i<data.tickets.length; i++){
              for(let j=0; j<data.users.length; j++){
                if(data.tickets[i].userId === data.users[j].id){
                  let ticketJson = {...data.tickets[i], userObj: data.users[j]}
                  ticketArray.push(ticketJson)
                }
              }
            }
    
        setData(ticketArray)
        // orderDataByValue(ticketArray)
      
return ticketArray;

    // setData(data.tickets);
    // setUser(data.users);
    console.log("data.....1",ticketArray)

    } catch (error) {
    
    console.log("error hi at fun.......")
    }
}


//   export default function useProduct(){
//     console.log("useProduct is called.............")
//     const [allTickets,setAllTickets]=useState([]);
//     const [allUser,setAllUser]=useState([]);
//     // const [tags,setTags]=useState([]);
//     // const [order,setOrder]=useState([]);
//     // const [token,setToken]=useState(null);
//     useEffect(()=>{
//         console.log("useeffect at useProduct....")
//         fun(setAllTickets,setAllUser);

//     },[])
//     return [allTickets,setAllTickets,allUser,setAllUser];
// }