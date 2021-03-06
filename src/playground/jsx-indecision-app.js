console.log("app.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "The premier application for indecisive minds.",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderIndecisionApp();
};

const makeDecision = () => {
  const genNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[genNum]);
};

const appRoot = document.getElementById("app");

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}> Remove all</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
