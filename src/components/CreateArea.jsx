import React, { useState } from "react";
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { PropaneSharp } from "@mui/icons-material";

export default function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event){
        console.log(event.target)
        const {name,value} = event.target;

        setNote(prevNote => {
            return{
                ... prevNote,
                [name]:value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:"",
        });
        event.preventDefault()
    }

    function expand(){
        setExpanded(true)
    }


    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                <input 
                    type="text" 
                    name="title" 
                    placeholder=" Add note title"
                    onChange={handleChange}
                    value={note.title}
                    />
                    )}
                <textarea
                    name="content"
                    rows={isExpanded? 3 : 1}
                    onClick={expand}
                    placeholder="✍🏻 Hey! Time to take a note..."
                    onChange={handleChange}
                    value={note.content}
                    />

                    <Fab onClick={submitNote}>
                        <AddIcon color="primary" />
                    </Fab>

            </form>
        </div>
    )
}