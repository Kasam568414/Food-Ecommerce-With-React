import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../mainRoot/MainRoot";
import Home from "../pages/home/Home";
import Blog1 from "../pages/home/Blog1";
import OurMenu from "../pages/OurMenu";
import MealPlans from "../pages/MealPlans";
import CateringSection from "../pages/CateringSection";
import Login from "../pages/home/Login";
import SignUp from "../pages/home/SignUp";
import Profile from "../components/shared/Profile";
import OrderHistory from "../components/shared/OrderHistory";
import HowItWorks from "../pages/home/HowItWorks";
import Testimonial from "../pages/home/Testimonial";
import Faq from "../pages/home/Faq";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot></MainRoot>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=> fetch("/card.json"),
        },
        {
          path:"/blog/:id",
          element:<Blog1></Blog1>,
          loader:()=>fetch("/card.json")
        },
        {
          path:"/our_menu",
          element:<OurMenu></OurMenu>,
          loader: ()=>fetch ("/card.json")
        },
        {
          path:"/meal",
          element:<MealPlans></MealPlans>
        },
        {
         path:"/catering",
          element:<CateringSection></CateringSection>
        },
        {path:"/work",
          element:<HowItWorks></HowItWorks>

        },
        {
          path:"/testimonial",
          element:<Testimonial></Testimonial>

        },
        {
          path:"/faq",
          element:<Faq></Faq>

        },
        {
          path:"/login",
          element:<Login></Login>
        },

        {
          path:"/sign",
          element:<SignUp></SignUp>
        },
        {
          path:"/profile",
          element:<Profile></Profile>
          
        },
        {
          path:"/order",
          element:<OrderHistory></OrderHistory>
        }

      ]
    },
  ]);

  export default router;