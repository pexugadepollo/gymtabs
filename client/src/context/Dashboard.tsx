import React, { createContext, useMemo, useState} from "react";

export interface DashboardContextInterface {
    value: number,
    setValue: (value: number) => void;
}

export const DashboardContext = createContext<DashboardContextInterface | null>(
    null
);

export const DashboardProvider: React.FC = ({children}) => {
    const [value, setValue] = useState(0);


    const memorizedContext = useMemo(
        () => ({
            value,
            setValue
        }),
        [value, setValue]
    );

    return(
        <DashboardContext.Provider value={memorizedContext}>
            {children}
        </DashboardContext.Provider>
    );
};
