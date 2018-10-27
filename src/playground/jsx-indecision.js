console.log("App is running");

const app = {
    title: 'Some title',
    subtitle: 'Subtitle',
    options: ['One' , 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("dsds");

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p>}
            <p>{ app.options.length > 0 ? 'Here are your option' : 'No option'}</p>
            <button disabled={app.options.length === 0 ? true: false} onClick={onMakeDecision}>What should I do ?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}> {option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button >Add Option</button>
                
            </form>
            
        </div>
    ); 
    ReactDOM.render(template, appRoot);
}

render();