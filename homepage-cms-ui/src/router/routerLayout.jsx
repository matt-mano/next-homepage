import React from "react";
import CMSNavbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const RouterLayout = () => {
    return (
        <div>
            <CMSNavbar />
            <Outlet />
        </div>
    )
}

export default RouterLayout;