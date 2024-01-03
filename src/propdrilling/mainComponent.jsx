import { PersonalDetail } from "./personalDetail";

export function MainComponent() {
    const data = {
        name: "Anju",
        age: 23,
        city: "Bangalore",
        pincode: "560103",
        state: "Karnataka",
    };
    return <PersonalDetail data={data} />
}