// import { createContext, useState, useEffect } from "react";

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// export const ProductContext = createContext({
//   products: [],
// });

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const categoryMap = await getCategoriesAndDocuments("categories");
//       console.log(categoryMap);
//     }
//     fetchData();
//   }, []);

//   const value = { products };
//   return (
//     <ProductContext.Provider value={value}>
//       {children}
//     </ProductContext.Provider>
//   );
// };
