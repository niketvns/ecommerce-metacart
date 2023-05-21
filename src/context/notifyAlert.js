import React, {createContext, useContext} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyAlertContext = createContext();

const NotifyAlertProvider = ({children}) => {

    const tostifyObj = {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        theme: "light",
    }

    const notifyInfo = (content) => toast.info(content, tostifyObj);

    const notifyWarn = (content) => toast.warn(content, tostifyObj);

    const notifySuccess = (content) => toast.success(content, tostifyObj);
    const notifyError = (content) => toast.error(content, tostifyObj);

    return (
        <notifyAlertContext.Provider value={{notifyInfo, notifyWarn, notifySuccess, notifyError}}>
            {children}
        </notifyAlertContext.Provider>
    )
}

const useNotifyAlert = () => useContext(notifyAlertContext);

export {NotifyAlertProvider, useNotifyAlert};