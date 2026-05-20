// create react components that contains array of fruit object with item id, item name, availability and price perform the following task using filter and map
// 1. display only available fruit
// 2. display fruit name in h1 tag 
// 3. increse their price by 10

function Mf1() {
    const fruits = [
        { id: 1, name: 'Apple', available: true, price: 100 },
        { id: 2, name: 'Banana', available: false, price: 40 },
        { id: 3, name: 'Orange', available: true, price: 80 }
    ];

    return (
        <div>
        <h1>Available Fruits</h1>
        {fruits.filter((fruit) => fruit.available === true)
            .map((fruit) => (
            <div key={fruit.id}>
                <h2>{fruit.name}</h2>
                <h2>Price: {fruit.price + 10}</h2>
            </div>
            ))}
        </div>
    );
}

export default Mf1;
