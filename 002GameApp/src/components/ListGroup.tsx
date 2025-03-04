function ListGroup() {

    let items = ["New york", "LA","Lusaka", "Rabat","Tokyo"]
    items = []

    const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null;
    }

    return (
        <>
            <h1>List Group</h1>
            {getMessage()} 
            {items.length === 0 && <p>Shortcut Method</p>}
            <ul>
                {items.map((item) =>(<li key={item}>{item}</li>) )} 
            </ul>
        </>
    );
}

export default ListGroup;
