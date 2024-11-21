import './index.css';
import Employee from './componets/employees';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('teacter');
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (  
        <>
        <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
        }} />
          <Employee  name="Innopro" role="hacker"/>
          <Employee name="Hamza" role={role}/>
          <Employee name="cate" />

        </>
      )
    
      : (
        <p>you cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
