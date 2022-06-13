import React, { useState, useEffect } from "react";
import { Coffee } from "../coffee/Coffee";

export default function Coffees({searchQuery}) {

    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        setCoffees([
            {
                country: "Ethiopia",
                region: "Sidama Bensa",
                process: "Washed",
                variety: "Heirloom",
                altitude: "1850 - 2200",
                roast: "Medium Light",
                cuppingNotes: ["Melon", "Orange", "Floral", "Sugarcane"],
                brewMethods: ["Chemex", "Espresso", "Moka Pot"],
                extraNotes: "Our New Ethiopia Green Bean is a fresh harvest this year. It is the highest scored Ethiopian Coffee available from our importers."
            },
            {
                country: "Ethiopia",
                region: "Sidama Bensa",
                process: "Washed",
                variety: "Heirloom",
                altitude: "1850 - 2200",
                roast: "Medium Light",
                cuppingNotes: ["Melon", "Orange", "Floral", "Sugarcane"],
                brewMethods: ["Chemex", "Espresso", "Moka Pot"],
                extraNotes: "Our New Ethiopia Green Bean is a fresh harvest this year. It is the highest scored Ethiopian Coffee available from our importers."

            },
            {
                country: "Guatemala",
                region: "Sidama Bensa",
                process: "Washed",
                variety: "Heirloom",
                altitude: "1850 - 2200",
                roast: "Medium Light",
                cuppingNotes: ["Melon", "Orange", "Floral", "Sugarcane"],
                brewMethods: ["Chemex", "Espresso", "Moka Pot"],
                extraNotes: "Our New Ethiopia Green Bean is a fresh harvest this year. It is the highest scored Ethiopian Coffee available from our importers."

            },
            {
                country: "Peru",
                region: "Sidama Bensa",
                process: "Washed",
                variety: "Heirloom",
                altitude: "1850 - 2200",
                roast: "Medium Light",
                cuppingNotes: ["Melon", "Orange", "Floral", "Sugarcane"],
                brewMethods: ["Chemex", "Espresso", "Moka Pot"],
                extraNotes: "Our New Ethiopia Green Bean is a fresh harvest this year. It is the highest scored Ethiopian Coffee available from our importers."

            },
            {
                country: "Latin",
                region: "New Thing",
                process: "Washed",
                variety: "Heirloom",
                altitude: "1850 - 2200",
                roast: "Medium Light",
                cuppingNotes: ["Melon", "Orange", "Floral", "Sugarcane"],
                brewMethods: ["Chemex", "Espresso", "Moka Pot"],
                extraNotes: "Our New Ethiopia Green Bean is a fresh harvest this year. It is the highest scored Ethiopian Coffee available from our importers."

            }

        ])
    }, [])

    function filteredCoffees(coffees, query) {
        return coffees.filter(coffee => {
            return coffee.country.includes(query) || coffee.region.includes(query)
        })
    }

    return (
        <div className="mx-auto px-4">
            <div className="grid grid-flow-row-dense grid-cols-3 gap-4">
                {filteredCoffees(coffees, searchQuery).map(coffee => {
                    return <Coffee value={coffee} />
                })}
            </div>
        </div>
    )
}