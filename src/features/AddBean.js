import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AppContext } from "../app/AppContext";
import { addBean } from "../common/API.js"
import { formatForStore } from "../common/Helpers";

export default function AddBean() {

    const emptyForm = {
        country: "",
        region: "",
        process: "",
        variety: "",
        altitude: "",
        roast: "",
        cuppingNotes: "",
        brewMethods: "",
        extraNotes: "",
        buyLink: ""
    }
    const [bean, setBean] = useState(emptyForm);
    const processes = [
        { value: '', text: 'Select Process' },
        { value: 'washed', text: 'Washed' },
        { value: 'natural', text: 'Natural' },
        { value: 'honey', text: 'Honey' },
        { value: 'anaerobic', text: 'Anaerobic' }
    ];
    const { isAddBeanCardVisible, showAddBeanCard } = useContext(AppContext);

    function handleSelectChange(event) {
        setBean({ ...bean, process: event.currentTarget.value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        addBean(formatForStore(bean))
        setBean(emptyForm)
    }


    return <>
        <div className={`z-50 h-2/3 w-1/2 p-4 fixed bg-secondary ${isAddBeanCardVisible ? "visible" : "invisible"}`}>
            <button onClick={showAddBeanCard} className="btn btn-square btn-ghost bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <form className="form-control p-2" onSubmit={event => handleFormSubmit(event)}>
                <input className="input" type="text" placeholder="Country" value={bean.country} onChange={event => setBean({ ...bean, country: event.currentTarget.value })} />
                <input className="input" type="text" placeholder="Region" value={bean.region} onChange={event => setBean({ ...bean, region: event.currentTarget.value })} />
                <select className="select" value={bean.process} onChange={event => handleSelectChange(event)}>
                    {
                        processes.map(process => (
                            <option key={process.value} value={process.value}>{process.text}</option>
                        ))
                    }
                </select>
                <input className="input" type="text" placeholder="Variety" value={bean.variety} onChange={event => setBean({ ...bean, variety: event.currentTarget.value })} />
                <input className="input" type="text" placeholder="Altitude" value={bean.altitude} onChange={event => setBean({ ...bean, altitude: event.currentTarget.value })} />
                <input className="input" type="text" placeholder="Roast" value={bean.roast} onChange={event => setBean({ ...bean, roast: event.currentTarget.value })} />
                <input className="input" type="text" placeholder="Cupping Notes (comma separated)" value={bean.cuppingNotes} onChange={event => setBean({ ...bean, cuppingNotes: event.currentTarget.value.split(',') })} />
                <input className="input" type="text" placeholder="Brew Methods (comma separated)" value={bean.brewMethods} onChange={event => setBean({ ...bean, brewMethods: event.currentTarget.value.split(',') })} />
                <textarea className="textarea" placeholder="Additional Info..." value={bean.extraNotes} onChange={event => setBean({ ...bean, extraNotes: event.currentTarget.value })} />
                <input className="input" type="url" placeholder="Link to buy" value={bean.buyLink} onChange={event => setBean({ ...bean, buyLink: event.currentTarget.value })} />
                <button className="btn btn-primary" type="submit">Save</button>
            </form>
        </div>
    </>
}