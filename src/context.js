import React from 'react';

export const initial = {
    isDarkMode: `${localStorage.getItem('color-theme') === 'dark' ? true : false}`,
    activeTab: '',
};

export const Context = React.createContext(initial);
export const useContext = React.useContext;

