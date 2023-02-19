import './App.css'
import ListTask from './component/ListTask'
import Addtask from './component/Addtask'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { filtertask, clearfilter } from './redux/features/tasksSlice'

function App() {
  const dispatch = useDispatch()
  const [show, setshow] = useState(false)
  const [id, setid] = useState(1)
  const [descr, setdesc] = useState('')
  const [isdone, setisdone] = useState('')
  const [change,setchange] = useState([true,0])
  function clickhandle() {
    return (
      <div style={{ marginLeft: "50%", marginTop: 3 }}>
        <div><button onClick={handleDone} style={{ width: "12.2rem" }}>Done</button></div>
        <div><button onClick={handleNone} style={{ width: "12.2rem" }}>Non</button></div>
      </div>
    )
  }
  function handleDone() {
    dispatch(filtertask("Yes"))
  }
  function handleNone() {
    dispatch(filtertask("No"))
  }
  function clearfil() {
    dispatch(clearfilter())
  }
  return (
    <div>
      <ListTask setid={setid} setdesc={setdesc} setisdone={setisdone} change={change} setchange={setchange} />
      <button onClick={() => setshow(!show)} style={{ marginLeft: "40%", marginTop: "0.2%", width: "12.2rem", backgroundColor: "yellow", cursor: "pointer" }}>Filter (isDone)</button>
      {show ? clickhandle() : null}
      <div>
        <button style={{ width: "12.2rem", backgroundColor: "red", marginLeft: "40%", marginTop: "0.2%", cursor: "pointer" }} onClick={clearfil}>clear</button>
      </div>
      <Addtask id={id} isdone={isdone} descr={descr} setid={setid} setdesc={setdesc} setisdone={setisdone} change={change} />
    </div>
  )
}

export default App
