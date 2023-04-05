import React, { Component } from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }
    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }
    render() {
        if (this.state.hasError) {
return <h1>Something went wrong!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
// function Student(props)
// {
//     if(props.name === "Ajay")
//     {
//         throw new Error("Ajay student is not accepted")
//     }

//     return(
//         <>
//         <p>{props.name}</p>
//         </>
//     )
// }
// export default Student;
function App() 
{
  return (
            <>
             <ErrorBoundary>
               <ErrorHandling />
             </ErrorBoundary>
            </>
         );   
}
