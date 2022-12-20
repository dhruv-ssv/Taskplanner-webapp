
import React, { useState } from 'react';

export const Addtodo = ({addtodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("second");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Both of title and desc should be full!!")
        }
        addtodo(title,desc);

    }

    return (
        <form className='container'>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>settitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
                    </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo description</label>
                <input type="text" className="form-control" value={desc} onChange={(e)=>setdesc(e.target.value)} id="desc"/>
            </div>
            
            <button type="submit" className="btn btn-sm btn-primary" onClick={submit}>Add_to_do</button>
        </form>
    )
}
