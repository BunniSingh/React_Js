let rootElement = document.getElementById('root');
function NewComponent(){
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const list = (
    <ul>
        {items.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>
    );
    return list;
}

const MyDiv = () =>{
    return  (
        <div>
            <h1>Hello, World!</h1>
            <p>This is a simple React component.</p>
            {<NewComponent />}
        </div>
    )   
}



const root  = ReactDOM.createRoot(rootElement);
root.render(
    <MyDiv></MyDiv>
);