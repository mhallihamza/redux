import React from 'react'
import Task from './Task'
import { useSelector} from 'react-redux'
function ListTask({setid,setdesc,setisdone,setchange,change}) {
  const posts = useSelector((state) => state.task.tasks);
  const filter = useSelector((state)=>state.task.filter);
  const listener = filter.length ? filter : posts
  return (
    <div style={{marginLeft:"40%"}}>
      <h1 style={{marginLeft:"7%", color:"green"}}>Tasks</h1>
      <table>
  <thead>
    <tr>
      <th>Description</th>
      <th>IsDone</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
     {listener.map(post=>(<Task
               key = {post.id}
               setchange={setchange}
               setid={setid}
               setdesc={setdesc}
               setisdone={setisdone}
               change={change}
               id = {post.id}
               descr = {post.descr}
               isdone = {post.isdone} />
        ))}
        </tbody>
    </table>
    </div>
  )
}

export default ListTask