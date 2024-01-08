

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Rachel" />
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
