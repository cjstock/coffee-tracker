import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {

    const [searchQuery, setSearchQuery] = useState("");
    const [isEditBeanVisible, setIsEditBeanVisible] = useState(false);
    const [isAddBeanCardVisible, setIsAddBeanCardVisible] = useState(false);
    const [selectedBean, setSelectedBean] = useState("");


    function showEditBeanCard(beanId) {
        setSelectedBean(beanId);
        setIsEditBeanVisible(prev => prev = !isEditBeanVisible);
    }

    function showAddBeanCard() {
        setIsAddBeanCardVisible(prev => prev = !isAddBeanCardVisible);
    }

    function handleSearchQueryChange(string) {
        setSearchQuery(string)
    }

    const value = {
        searchQuery,
        isEditBeanVisible,
        selectedBean,
        isAddBeanCardVisible,
        showAddBeanCard,
        showEditBeanCard,
        handleSearchQueryChange
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider }