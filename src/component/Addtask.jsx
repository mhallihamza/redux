import React from 'react'
import { useDispatch } from 'react-redux'
import { createtask } from '../redux/features/tasksSlice'
function Addtask({id,descr,isdone,change,setid,setdesc,setisdone}) {
    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault()
        if(isdone){
        setid(id + 1);
        dispatch(createtask(
            {
                id,
                descr,
                isdone
            }
        ))
        setdesc("");
        setisdone("");
        }
    }
    function handleup(){
       dispatch(updatetask(
        {
            id,
            descr,
            isdone 
        }
       ))
    }
    return (
        <form  style={{ display: "flex", marginTop: 10 }}>
            <div>
                <label htmlFor="desc" style={{ fontWeight: "bold" }}>Description</label>
                <input type="text" name="desc" id="desc" value={descr} onChange={e => setdesc(e.target.value)} style={{ marginLeft: 5 }} required />
            </div>
            <div style={{ marginLeft: "1%", marginRight: "1%" }}>
                <label htmlFor="isdone" style={{ fontWeight: "bold", marginRight: 7 }}>IsDone</label>
                <select type="text" name="isdone" id="isdone" style={{ width: "12rem" }} value={isdone} onChange={e => setisdone(e.target.value)} required>
                    <option defaultValue>
                        Select Option
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            <div>
                { change[0] ?
                <button onClick={handleSubmit} style={{ cursor: "pointer"}}>Add Task</button> : 
                <button onClick={handleup} style={{ cursor: "pointer"}}>Update Task</button>
                }
            </div>
        </form>
    )
}

export default Addtask