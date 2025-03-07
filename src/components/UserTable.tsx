import { UserType } from '../utils/types'

const UserTable = ( { tableData }: { tableData: UserType[]}) => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Human User</th>
            <th>Created Date</th>
            <th>Password Change Date</th>
            <th>Days since last password change</th>
            <th>Last Access Date</th>
            <th>Days since Last Access</th>
            <th>MFA Enabled</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData?.map((item, i) => {
              return(
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.createDate}</td>
                  <td>{item.passwordChangedDate}</td>
                  <td>{item.daysSincePasswordChange}</td>
                  <td>{item.lastAccessDate}</td>
                  <td>{item.daysSinceLastAccess}</td>
                  <td>{item.mfaEnabled}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserTable