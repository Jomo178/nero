// import { createContext, useState, useEffect } from "react";

// export const UserContext = createContext(null);

// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       fetch(`https://discord.com/api/v10/users/@me`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         method: "GET",
//       })
//         .then((response) => response.json())
//         .then((data) => setUserData(data))
//         .catch((error) => console.error("Error fetching user data:", error));
//     }
//   }, []);

//   console.log(userData);

//   return (
//     <UserContext.Provider value={userData}>{children}</UserContext.Provider>
//   );
// };
