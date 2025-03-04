
//PascalCasing

function Message() {
    const name = "Eliud";
    if (!name) 
        return <h1>Hello Guest</h1>;
    else
        return (
            <>
                <h1>Hello World</h1>
                <h2>Name : {name} </h2>
            </>
            
        );
}

export default Message