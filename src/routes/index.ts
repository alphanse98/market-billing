import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const Items = lazy(() => import('../pages/Items'));
const Billings = lazy(() => import('../pages/Billings'));
const Takeorder = lazy(()=>import('../pages/Takeorder'));
const Customers = lazy(() => import('../pages/Customers'));
const Employees = lazy(()=>import('../pages/Employees'));
const PackingUnits = lazy(()=>import('../pages/PackingUnits'));
// const Customers = lazy(()=>import('../CustomComponents/table/CommonTable'));
const coreRoutes = [
  {
    path: '/Customers',
    title: 'Customers',
    component: Customers,
  },
  {
    path: '/Items',
    title: 'Items',
    component: Items,
  },
  {
    path: '/PackingUnits',
    title: 'PackingUnits',
    component: PackingUnits,
  },
  {
    path: '/Billings',
    title: 'Billings',
    component: Billings,
  },
  {
   path:"/Takeorder",
   title:"Takeorder",
   component:Takeorder,
  },
  {
    path:"/Employees",
    title:"Employees",
    component:Employees,
  },
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  
];

const routes = [...coreRoutes];
export default routes;
