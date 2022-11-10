
import Login from "../Auth/Login/Login";
import PrivateRout from "../Auth/PrivateRout/PrivateRoute";
import Register from "../Auth/Register/Register";
import SignUp from "../Auth/Register/SignUp";
import AddServices from "../Pages/AddServices/AddServices";
import AllPages from "../Pages/AllPages/AllPages";
import Blogs from "../Pages/AllPages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
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
         path: "/signup",
         element: <SignUp></SignUp>,
       },
       //    {
       //      path: "/allreviewstable/:id",
       //      loader: ({ params }) =>
       //        fetch(`https://wildlife-studio-server-jalalemon.vercel.app/allReviews/${params.id}`),
       //      element: <AllReviewsTable></AllReviewsTable>,
       //    },
       {
         path: "/allreviews",
         element: <AllReviews></AllReviews>,
       },
       {
         path: "/addServices/:id",
         loader: ({ params }) =>
           fetch(`https://wildlife-studio-server-jalalemon.vercel.app/services/${params.id}`),
         element: <AddServices></AddServices>,
       },
       {
         path: "/addServices",
         element: (
           <PrivateRout>
             <AddServices></AddServices>
           </PrivateRout>
         ),
       },
      //  {
      //    path: "/ReviewsForm/:id",
      //    loader: ({ params }) =>
      //      fetch(`https://wildlife-studio-server-jalalemon.vercel.app/allReviews/${params.id}`),
      //    element: (
      //      <PrivateRout>
      //        <ReviewsForm></ReviewsForm>
      //      </PrivateRout>
      //    ),
      //  },
       {
         path: "/ReviewsForm/:id",
         loader: ({ params }) =>
           fetch(`https://wildlife-studio-server-jalalemon.vercel.app/allServices/${params.id}`),
         element: (
           <PrivateRout>
             <ReviewsForm></ReviewsForm>
           </PrivateRout>
         ),
       },

       {
         path: "/servicesDetails/:id",
         element: <ServicesDetails></ServicesDetails>,
         loader: ({ params }) =>
           fetch(`https://wildlife-studio-server-jalalemon.vercel.app/allServices/${params.id}`),
       },
       {
         path: "/login",
         element: <Login></Login>,
       },
       {
         path: "/blogs",
         element: <Blogs></Blogs>,
       },

       {
         path: "/myreviews",
         element: (
           <PrivateRout>
             <MyReviews></MyReviews>
           </PrivateRout>
         ),
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