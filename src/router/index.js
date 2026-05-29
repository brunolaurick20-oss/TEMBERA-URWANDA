import { createRouter,createWebHistory } from "vue-router";
import home from "../Views/home.vue"
import about from "../Views/about.vue"
import services from "../Views/Services.vue"
import photos from "../Views/photos.vue"
import videos from "../Views/Videos.vue"
import north from "../Views/Northern.vue"
import south from "../Views/Southern.vue"
import east from "../Views/Eastern.vue"
import west from "../Views/Western.vue"
import kigali from "../Views/Kigali.vue"
import contact from "../Views/Contact.vue"
const routes=[
    {
        path:"/",
        name:"Home",
        component:home
    },
    {
        path:"/about",
        name:"About",
        component:about
    },
      {
path:"/services",
name:"Services",
component:services

    },

{
  path:"/photos",
  name:"Photos",
  component:photos  
},
{
    path:"/videos",
    name:"videos",
    component:videos

},
{
    path:"/north",
    name:"North",
    component:north
},

{
    path:"/east",
    name:"East",
    component:east
},

{
    path:"/south",
    name:"South",
    component:south
},

{
    path:"/west",
    name:"Western",
    component:west
},
{
    path:"/kigali",
    name:"Kigali",
    component:kigali

},
{
    path:"/contact",
    name:"Contact",
    component:contact
}




];

const router=createRouter(
    {
   history:createWebHistory(),
   routes,
    },)
  

export default router