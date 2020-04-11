import React, { createContext, useMemo, useState} from "react";

export interface RoleContextInterface {
    admin: boolean,
    setAdmin: (admin: boolean) => void;
}

export const RoleContext = createContext<RoleContextInterface | null>(
    null
);

export const RoleProvider: React.FC = ({children}) => {
    const [admin, setAdmin] = useState(false);


    const memorizedContext = useMemo(
        () => ({
            admin,
            setAdmin
        }),
        [admin, setAdmin]
    );

    return(
        <RoleContext.Provider value={memorizedContext}>
            {children}
        </RoleContext.Provider>
    );
};
