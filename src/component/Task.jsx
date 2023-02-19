import React from 'react'
import { useDispatch } from 'react-redux'
import {deletetask} from '../redux/features/tasksSlice'
import { useSelector } from 'react-redux';
function Task(props) {
    const data = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();
    function handledelete(id){
        dispatch(deletetask(id));
    }
    function handleupdate(id){
        props.setdesc(data[data.length-id-1].descr);
        props.setisdone(data[id].isdone);
        props.setchange([!props.change[0],id])
    }
    return (
        <tr>
            <td>{props.descr}</td>
            <td>{props.isdone}</td>
            <th>
                <button style={{backgroundColor:"blue"}} onClick={()=>handleupdate(props.id)}>Update</button>
                <button style={{backgroundColor:"red"}} onClick={()=>handledelete(props.id)}>Delete</button>
            </th>
        </tr>
    )
}
export default Task