    export function capitalizeString(string) {
        return string !== "" && (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
    }

    export function formatForStore(bean) {
        return Object.keys(bean).reduce((accumulator, key) => {
            if (typeof (bean[key]) === "string") {
                accumulator[key] = bean[key].toLowerCase().trim()
            } else {
                accumulator[key] = bean[key]
            }
                return accumulator
        }, {})
    }