// "use client";
// import { createContext, useContext, useState } from "react";

// const MapContext = createContext();

// export const MapProvider = ({ children }) => {
//     const [address, setAddress] = useState("");
//     const [coords, setCoords] = useState(null);

//     return (
//         <MapContext.Provider value={{ address, setAddress, coords, setCoords }}>
//             {children}
//         </MapContext.Provider>
//     );
// };

// export const useMap = () => useContext(MapContext);
