import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../app/AppContext";
import Bean  from "../bean/Bean";
import NewBean from "../bean/NewBean";
import fetchBeans from "./beansAPI";

export default function Beans() {

    const [beans, setBeans] = useState([]);
    const appContext = useContext(AppContext);

    useEffect(() => {
        fetchBeans()
        .then(res => {
            setBeans(res)
        })
    }, [beans])

    function filteredBeans(beans, query) {
        return beans.filter(bean => {
            return bean.country.includes(query) || bean.region.includes(query)
        })
    }

    return <>
        <div className="mx-auto px-4 lg:max-w-5xl md:max-w-2xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
                {
                    beans && filteredBeans(beans, appContext.searchQuery).map(bean => {
                        return <Bean value={bean} key={bean._id}/>
                    })
                }
                <NewBean />
            </div>
        </div>
    </>
}