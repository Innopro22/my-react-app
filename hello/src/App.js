import './index.css';
import Employee from './componets/employees';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState('teacter');
  const [employees, setEmployees] = useState(
    [
      {
        name: "innopro",
        role: 'developer',
        img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
      },
      {
        name: "Hamza",
        role: "Mechanic",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      },
      {
        name: "Romie",
        role: "Nothing",
        img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
      },
      {
        name: "Drake",
        role: "maneger",
        img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg",
      },
      {
        name: "Allan",
        role: "student",
        img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",
      },
      {
        name: "Amon",
        role: "Policeman",
        img: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg",
      },
      {
        name: "Jose",
        role: "reception",
        img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg",
      },
      {
        name: "Ritah",
        role: "Cleaner",
        img: "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg",
      },
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (  
        <>
        <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
        }} />
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee)=>{
            return (<Employee 
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.img}
             />)
          })}
          </div>
        </>
      )
    
      : (
        <p>you cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
