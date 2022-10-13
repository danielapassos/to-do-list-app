import React from "react";

export default function Footer (){

    const date = new Date()

    return (
        <footer>
            
            <p>Made by Daniela Passos | {date.getFullYear()}</p>
        </footer>
    )
}