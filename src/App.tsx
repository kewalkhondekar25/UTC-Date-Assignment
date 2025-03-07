import { useEffect, useState } from 'react'
import './App.css'
import { users } from './utils/data';
import { calculateDaysSince } from './utils/calculateDaysSince';
import { UserType } from './utils/types';
import UserTable from './components/UserTable';

function App() {

  const [tableData, setTableData] = useState<UserType[]>([]);
  console.log(tableData);
  

  useEffect(() => {
    const updatedUsers = users.map(user => {
      return(
        {
          ...user,
          daysSincePasswordChange: calculateDaysSince(user.passwordChangedDate),
          daysSinceLastAccess: calculateDaysSince(user.lastAccessDate)
        }
      )
    });
    setTableData(updatedUsers);
  }, []);

  return (
    <div>
      <h3>Programming task in React.js</h3>
      <UserTable tableData={tableData}/>
    </div>
  )
}

export default App
