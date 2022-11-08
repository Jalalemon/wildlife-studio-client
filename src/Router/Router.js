import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import AllPages from "../Pages/AllPages/AllPages";
import Home from "../Pages/Home/Home";
import AllReviews from "../Pages/ServicesDtails/AllReviews/AllReviews";
import AllReviewsTable from "../Pages/ServicesDtails/AllReviews/AllReviewsTable";
import ReviewsForm from "../Pages/ServicesDtails/ReviewsForm/ReviewsForm";
import ServicesDetails from "../Pages/ServicesDtails/ServicesDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../LayOut/Main");

 export const router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     children: [
       {
         path: "/",
         element: <Home></Home>,
       },
       {
         path: "/allPages",
         element: <AllPages></AllPages>,
       },
       {
         path: "/allreviewstable/:id",
         loader: ({ params }) =>
           fetch(`http://localhost:5000/allReviews/${params.id}`),
         element: <AllReviewsTable></AllReviewsTable>,
       },
       {
        path: '/allreviews',
        element: <AllReviews></AllReviews>
       },
       {
         path: "/ReviewsForm/:id",
         loader: ({ params }) =>
           fetch(`http://localhost:5000/allReviews/${params.id}`),
         element: <ReviewsForm></ReviewsForm>,
       },
       {
         path: "/servicesDetails/:id",
         element: <ServicesDetails></ServicesDetails>,
         loader: ({ params }) =>
           fetch(`http://localhost:5000/allServices/${params.id}`),
       },
       {
         path: "/login",
         element: <Login></Login>,
       },
       {
         path: "/register",
         element: <Register></Register>,
       },
       {
         path: "*",
         element: (
           <h3 className="mx-auto text-3xl"> 404: oppps! Rout not found </h3>
         ),
       },
     ],
   },
 ]);