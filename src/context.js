import React from 'react';

export const initial = {
    // isDarkMode: true,
    isDarkMode: `${localStorage.getItem('color-theme') === 'dark' ? true : false}`,
    // isDarkMode: true,
    activeTab: '',
};

export const Context = React.createContext(initial);
export const useContext = React.useContext;

