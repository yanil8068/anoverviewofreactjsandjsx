import { Exampleclasscomponent } from "./Exampleclasscomponent";
// import "./App.css";
import Enhancedcomponent from "./HIgherordercomponent";
import { Studentdetails } from "./studentdetails";
import { CounterFunctionComponent } from "./state/CounterFunctionComponent";
import { MainComponent } from "./propdrilling/mainComponent";


export default function App(){
    const students = [{
        name:"Deep",
        age: 24,
        city: "delhi",
        monitor: true
    },
{
    name: "Radhika",
    age: 23,
    city: "Bangalore",
    monitor: false
},];
    // return <div>
    //     <h1>App Component</h1>
    //     <Exampleclasscomponent/>
    //     <Enhancedcomponent/>
    // </div>

    // return (
    //     <div>
    //       <Studentdetails name="Shivam" age="24"/>
    //     </div>
    // )

    // return (
    //     <div>
    //         <Studentdetails data={students} />
    //     </div>
    // );

    // return <div>
    //     {students.map((s,index)=>{
    //         return <Studentdetails key={index} data={s} />;
    //     })}
    // </div>


    // return (
    //     <div>
    //         <CounterFunctionComponent />
    //     </div>
    // )

    return (
        <div>
          <MainComponent />
        </div>
    )




}