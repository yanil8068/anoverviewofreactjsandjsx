import { Link, Outlet } from "react-router-dom";

export function OrdersComponent(){
    return (
        <div><h1>ordercomponent</h1>
            <Link to="/Orders/orderid-1">Order 1</Link><br/>
            <Link to="/Orders/orderid-2">Order 2</Link><br/>
            <Outlet/>
        </div>
    );
}