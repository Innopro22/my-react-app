import './index.css';
import Employee from './componets/employees';
import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import AddEmployee from './componets/addEmployees'
function App() {
  const [role, setRole] = useState('teacter');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "innopro",
        role: 'developer',
        img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
      },
      {
        id: 2,
        name: "Hamza",
        role: "Mechanic",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      },
      {
        id: 3,
        name: "Romie",
        role: "Nothing",
        img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
      },
      {
        id: 4,
        name: "Drake",
        role: "maneger",
        img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg",
      },
      {
        id: 5,
        name: "Allan",
        role: "student",
        img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",
      },
      {
        id: 6,
        name: "Amon",
        role: "Policeman",
        img: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg",
      },
      {
        id: 7,
        name: "Jose",
        role: "reception",
        img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg",
      },
      {
        id: 8,
        name: "Ritah",
        role: "Cleaner",
        img: "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg",
      },
    ]
  );

   function updateEmployee(id, newName, newRole) {
    const updateEmployees = employees.map((employee) => {
       if(id === employee.id ) {
       return {...employee, name: newName, role: newRole}
       }

       return employee;
    });

    setEmployees(updateEmployees);
   }

    function newEmployee (name, role, img) {
      const newEmployee = {
        id: uuid(),
        name: name,
        role: role,
        img: img,
       }
       setEmployees([...employees, newEmployee])
    }

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
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              updateEmployee={updateEmployee}
             />)
          })}
          </div>
          <AddEmployee newEmployee={newEmployee}/>
        </>
      )
    
      : (
        <p>you cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
