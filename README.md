# Getting Started with Create React App

- intall node or if you have it then:
- check version of your node by typing node -v.
- npx runs node.
- npx create-react-app (name of the project) then enter.
- cd 'name of the new project.
- then type 'code .' to go into visual code app
- node-modules is where all our project dependencies laid down.
- src folder contains about 99% of our work.
- delete reportWebVital, test.js, and setupTest.js files.
- index.js is basically a file that takes all the react components and and mountains to the DOM.
- <React.StrictMode> // checks and gives warnings.
- npm start or npm start commands to start running the browser.
- if we delete node-modules, we install them by typing npm install
- Component is esencially a function and it has to return something which is normally a jsx template.
- sfc stands for 'stataless functional component', and it's a quick snnipet to create a functional component and a boiled component.

# functionality

- Create components.
- Create templates.
- Use and pass props.
- Use useState.
- Passing functions as props.
- UseEffect runs every in every render.
- Be careful to rerender in a infinitive loop, but it coul be really when fetching data.
- This is a dependency array => [] and it can be used as second argument.
- This empty array (dependency array) makes sure that hook only runs the function once when it first been rendered.