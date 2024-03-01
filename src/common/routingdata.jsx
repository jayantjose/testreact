import { lazy } from 'react';
import EditProfile from '../components/pages/editprofile';

const Indexpage = lazy(() => import('../components/pages/IndexPage'));

export const RouterData = [

{path:`${import.meta.env.BASE_URL}home`, element:<Indexpage />},
{path:`${import.meta.env.BASE_URL}edit-profile`, element:<EditProfile />},
 
];