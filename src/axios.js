// // Example with Axios in a service file (e.g., api.js)
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:3000', // Update the port as per your backend
// });

// export default instance;
// import axios from 'axios';

// export default axios.create({
//   baseURL: 'http://localhost:3000/api', // Replace with your backend server URL
//   timeout: 5000, // Set a timeout for requests (optional)
// });
import axios from 'axios';

// const RESTAPI = "http://localhost:3000/api";
const RESTAPI = "https://soi-dog-backend-4krd.vercel.app/api";
const api = axios.create({
  baseURL: RESTAPI,
  headers: { "Content-Type": "application/json" },
});

export default api;
