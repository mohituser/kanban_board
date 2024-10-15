import { useContext, useState } from "react";
import { userContext } from "../../Context/UserContext";

function Model(){
    // const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [priority,setPriority]=useState(0);
    const {popUp,setPopUp,allTickets,setAllTickets,userList,setUserlist}  = useContext(userContext);

  
    const handleSubmit = (e) => {
      e.preventDefault();
    //   alert(`Name: ${name}, Title: ${title}, Description: ${description}`);
    let user={...allTickets[0].userObj,name:name}
    let n=allTickets.length+1;
    setAllTickets([...allTickets,{...allTickets[0],status:'Todo',priority:priority,title:title,userObj:user,id:"CAM-"+n}])
    setUserlist([...userList,name])
    

    setPopUp(false);
    };

    return <div>
       {popUp && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              maxWidth: '500px',
              width: '100%',
            }}
          >
            <h2>Add New Ticket</h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="title" style={{ display: 'block', fontWeight: 'bold' }}>Title:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>

             <div style={{ marginBottom: '15px' }}>
                <label htmlFor="priority" style={{ display: 'block', fontWeight: 'bold' }}>Priority:</label>
                <select
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                >
                  <option value="">Select Priority</option>
                  <option value="1"> 1</option>
                  <option value="2"> 2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                </select>
              </div>

              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '10px',
                }}
              >
                Submit
              </button>

              <button
                onClick={()=>setPopUp(false)}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Close 
              </button>
            </form>
          </div>
        </div>
      )}
    
    </div>
}
export default Model;