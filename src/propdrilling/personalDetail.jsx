import { AddressDetail } from "./addressDetails";
export function PersonalDetail(props) {
    return (
        <div>
            <h1>Name:{props.data.name}</h1>
            <h1>Age:{props.data.age}</h1>
            <AddressDetail
            city={props.data.city}
            state={props.data.state}
            pincode={props.data.pincode}></AddressDetail>
        </div>
    );
}