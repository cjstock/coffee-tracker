import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {

    const [searchQuery, setSearchQuery] = useState("");
    const [editBean, setEditBean] = useState(false);

    const showEditBean = (event) => {
        setEditBean(prev => prev = !editBean);
    }

    function handleSearchQueryChange(string) {
        setSearchQuery(string)
    }

    const value = {
        searchQuery,
        editBean,
        showEditBean,
        handleSearchQueryChange
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider }