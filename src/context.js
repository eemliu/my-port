import React from 'react';

export const initial = {
    activeTab: '',
};

export const Context = React.createContext(initial);
export const useContext = React.useContext;

