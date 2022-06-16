import React, {useContext, useState} from "react";
import { AppContext } from "../app/AppContext";

export default function NewBean() {
    const appContext = useContext(AppContext)

    return (
        <button onClick={event => appContext.showAddBeanCard()} className="card bg-secondary shadow-xl flex w-72 h-52">
            <div className=" card-body grid place-content-center sm:min-w-max md:min-w-max">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            </div>
        </button>
    )
}