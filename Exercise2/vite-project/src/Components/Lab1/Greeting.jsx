function Greeting(props) {

    return(
            <div className="Greetings">
                    <h3>Hello {props.name ? props.name : "John"}</h3>
                    <p>{props.children} </p>
                    
            </div>
        );
    }
    
    export default Greeting