import React, {useEffect, useState} from "react";

export default function Navbar({onSearchQueryChange, searchQuery}) {

    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">Coffees</a>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" value={searchQuery} onChange={event => onSearchQueryChange(event.target.value)} />
                </div>
            </div>
        </div>
    )
}