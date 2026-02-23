// D:\Projects\Talvo\Talvo\src\lib\axios.js
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true //by adding this field browser will send the cookies to
    //  server automatically, on  every single req
})
export default axiosInstance;









// import axios from "axios";

// const getBaseURL = () => {
//   // In development → use relative path so Vite proxy works
//   if (import.meta.env.DEV) {
//     return "/api";
//   }
  
//   // In production → use the env variable or fallback
//   return import.meta.env.VITE_API_URL || "/api";
// };

// const axiosInstance = axios.create({
//   baseURL: getBaseURL(),
//   withCredentials: true,
// });

// // Optional: Log baseURL in dev to confirm
// if (import.meta.env.DEV) {
//   console.log("Axios baseURL in dev:", axiosInstance.defaults.baseURL);
// }

// export default axiosInstance;








// import axios from "axios";

// const getBaseURL = () => {
//   // In development → relative path → Vite proxy activates
//   if (import.meta.env.DEV) {
//     return "/api";
//   }
  
//   // In production → use whatever you set in .env for deployment
//   return import.meta.env.VITE_API_URL || "/api";
// };

// const axiosInstance = axios.create({
//   baseURL: getBaseURL(),
//   withCredentials: true,
// });

// export default axiosInstance;