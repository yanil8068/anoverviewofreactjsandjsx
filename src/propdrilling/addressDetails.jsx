export function AddressDetail(props) {
    return (
        <div>
            <h1>
                Address:{props.city}, {props.pincode}, {props.state}
            </h1>
        </div>
    );
}