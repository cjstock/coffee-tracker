import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { AppContext } from "../app/AppContext";
import Bean  from "./Bean";
import NewBean from "./NewBean";
import {fetchBeans} from "../common/API.js";

export default function Beans() {

    const appContext = useContext(AppContext);
    const { isLoading, isError, data, error } = useQuery('beans', fetchBeans)

    function filteredBeans(beans, query) {
        return beans.filter(bean => {
            return bean.country.includes(query) || bean.region.includes(query)
        })
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>{error.message}</span>
    }

    return <>
        <div className="mx-auto px-4 lg:max-w-5xl md:max-w-2xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
                {
                    data && filteredBeans(data, appContext.searchQuery).map(bean => {
                        return <Bean value={bean} key={bean._id}/>
                    })
                }
                <NewBean />
            </div>
        </div>
    </>
}