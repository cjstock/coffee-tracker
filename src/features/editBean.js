import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AppContext } from "../app/AppContext";
import { fetchBean } from "../common/API.js"

export default function EditBean() {

    const [bean, setBean] = useState({});
    const { isEditBeanVisible, selectedBean } = useContext(AppContext);
    const { isLoading, isError, refetch, data, error } = useQuery(['beans', selectedBean], fetchBean, {enabled: false});

    if (error) {
        return <span>{error.message}</span>
    }

    if (data) {
        console.log(data)
        return <>
            <div className={`z-50 h-1/2 w-1/2 p-4 fixed bg-secondary ${isEditBeanVisible ? "visible" : "invisible"}`}>
                <form className="form-control">
                    <input className="input" type="text" placeholder="Country" value={data.country} />
                    <input className="input" type="text" placeholder="Region" value={data.region} />
                    <select className="select" value={data.process}>
                        <option value={"Washed"} key={1}>Washed</option>
                        <option value={"Natural"} key={2}>Natural</option>
                        <option value={'Honey'} key={3}>Honey</option>
                        <option value={'Anaerobic'} key={4}>Anaerobic</option>
                    </select>
                    <input className="input" type="text" placeholder="Variety" value={data.variety} />
                    <input className="input" type="text" placeholder="Altitude" value={data.altitude} />
                    <input className="input" type="text" placeholder="Roast" value={data.roast} />
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        </>
    }
}