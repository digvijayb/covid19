
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
    {
    path: "/user",
    name: "Similar country ??",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
    },
    {
        path: "/typography",
        name: "About",
        icon: "pe-7s-news-paper",
        component: TableList,
        layout: "/admin"
    },
];

export default dashboardRoutes;
