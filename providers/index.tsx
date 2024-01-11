'use client'
import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {store} from "@/store/store";

interface IProps {
    children: ReactNode
}

const Providers = ({children}: IProps) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Providers;
