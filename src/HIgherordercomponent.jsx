const withlogger = (WrappedComponent)=>{
    return()=>{
        console.log("i am a logging something here");
        return <WrappedComponent/>;
    };
};
const Mycomponent = () => {
    return <h1>My Component</h1>;
};
const Enhancedcomponent = withlogger(Mycomponent);
export default Enhancedcomponent;