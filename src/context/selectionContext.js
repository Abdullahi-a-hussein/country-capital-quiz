import { createContext } from "react";

export const countryContext = createContext(null);
export const capitalContext = createContext(null);

// function cityReducer(cities, action) {
//   switch (action.type) {
//     case "selected":
//       return cities;
//     case "matched":
//       return cities.filter((city) => city !== action.city);

//     default:
//       break;
//   }
// }
