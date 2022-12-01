import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addname, deletename } from '../action/action'
export const FormComp =()=> {
    const [value, setValue] = useState({
        firstname : "",
        lastname : ""
    })
    const [addbtn, upbtn] = useState(false)
    //console.log(value)
    const selector = useSelector(state => state)
    //console.log(selector)
    const dispatch = useDispatch()
    const changeHandle =(e)=> {
        setValue({...value,[e.target.name]:e.target.value})
    }
    const Addname = () => {
        dispatch(addname(value))
    }
    const deletefun = (i) => {
       dispatch(deletename(i))
    }
    const editfun =() =>{
        upbtn(true)
    }
    return(
        <div>
            <h1>Iam from fromcomp</h1>
            <input type='text' 
            value={value.firstname} 
            name='firstname'
            onChange={(e)=>changeHandle(e)}/>&nbsp;

            <input type='text' 
             value={value.lastname}
             name='lastname'
             onChange={(e)=>changeHandle(e)} />&nbsp;

            {addbtn ? <button onClick={Addname}>UPDATE</button>:<button onClick={Addname}>ADD_NAME</button>}

            <table> 
                <thead>
                    <tr>
                        <td>FIRST_NAME</td>
                        <td>LAST_NAME</td>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            selector.map((v, i)=><tr key={i}>
                                <td>{v.firstname}</td>
                                <td>{v.lastname}</td>
                                <td>
                                    <button onClick={editfun}>edit</button>
                                    <button onClick={()=>deletefun(i)}>delete</button>
                                </td>
                            </tr>)
                        }
                    
                </tbody>
            </table>
        </div>
    )
}