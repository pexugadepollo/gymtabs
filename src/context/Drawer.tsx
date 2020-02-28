import React, { createContext, useMemo, useState} from "react";

export interface DrawerContextInterface {
    openDrawer: boolean,
    setOpenDrawer: (openDrawer: boolean) => void;
}

export const DrawerContext = createContext<DrawerContextInterface | null>(
    null
);

export const DrawerProvider: React.FC = ({children}) => {
    const [openDrawer, setOpenDrawer] = useState(false);


    const memorizedContext = useMemo(
        () => ({
            openDrawer,
            setOpenDrawer
        }),
        [openDrawer, setOpenDrawer]
    );

    return(
        <DrawerContext.Provider value={memorizedContext}>
            {children}
        </DrawerContext.Provider>
    );
};