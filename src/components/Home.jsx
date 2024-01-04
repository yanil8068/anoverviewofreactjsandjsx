import { Link } from "react-router-dom";
// import { DefaultChild } from "./orders/DefaultChild";
import { OrdersComponent } from "./orders/OrdersComponent";
export function Home(){
    return (
        <div>
            <h1>
                Home Component
            </h1>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Orders">Order</Link>
            
        </div>
    );
}