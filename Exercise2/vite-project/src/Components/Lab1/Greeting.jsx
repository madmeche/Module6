function Greeting(props) {

    return(
            <div className="Greetings">
                    <h3>Hello {props.name}</h3>
                    <p>{props.children} </p>
                    
            </div>
        );
    }
    
    export default Greeting