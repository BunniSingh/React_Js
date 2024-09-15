let rootElement = document.getElementById('root');
let root = ReactDOM.createRoot(rootElement);




function MainContent(){
    return (
        <div>
            {h1}
            <Main1 />
            <Main2 />
            <Main3 />
        </div>
    )
}

root.render(
    <div>
        <h1>Hello, World!</h1>
        <MainContent />
    </div>
);