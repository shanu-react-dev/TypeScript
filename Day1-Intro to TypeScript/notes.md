### TypeScript

_TypeScript is a SuperSet of JavaScript. Whatever the things are there in JavaScript will be included in TypeScript with Extra safety.It is a Programming language and it is compiled language. It is optionally Statically typed language._

_TypeScript is a strongly typed, open-source programming language developed by Microsoft that builds directly on top of JavaScript. It is classified as a "strict superset" of JavaScript, meaning that any valid JavaScript code is automatically valid TypeScript code._

### How it works

_TypeScript is a Programming language it can't run directly on the browser because Browser supports only one web language as JavaScript. To execute TypeScript first it should be transpiled or compiled in plain JavaScript._

### Transpiler

_Transpile refers to converting one programming language into another programming language. Here TypeScript will get converted into JavaScript which can be executed easily in the browser._

_A transpiler (short for source-to-source compiler) is a tool that translates source code from one high-level programming language into another high-level programming language at roughly the same level of abstraction. Unlike a traditional compiler, it does not output low-level machine code or bytecode._

### Babel

_Babel is a transpiler It converts High level programming language such as updated or latest version of JavaScript to the browser understandable JavaScript. **Browser does not understand ES6 or later version of JavaScript.** To make the browser understand entire JavaScript babel is there to transpile it to the browser understandable code._

### Installation of TypeScript

_Before installing TypeScript make sure you have installed Node JS and NPM. Without Node or NPM it's not possible to install TypeScript._

### Node JS and NPM

_Node JS is a Runtime environment which allows us to run the JavaScript code on server side. It runs the JavaScript code asynchronously._

_NPM stands for Node Package Manager it helps to install multiple packages as per your needs. It is open source and provides multiple libraries, frameworks and packages for users to install._

_Historically, JavaScript could only run inside internet browsers to make web pages interactive. Created in 2009, Node.js extracts Google Chrome's fast V8 JavaScript engine so it can run directly on a computer or server._

_npm stands for Node Package Manager. Instead of writing every feature from scratch, developers share reusable bundles of code called "packages" or "modules". It consists of two parts:_

- The Online Registry: A massive public database containing millions of free JavaScript libraries.
- The Command Line Interface (CLI): A local terminal tool used to download, update, and manage those libraries inside projects.

_To check whether Node JS or NPM is installed or not we need to run the command as follows_

- Node: `node -V` or `node --version`
- npm: `npm -V` or `npm --version`

_If both commands gives you some output like V24.5 this then it is installed else you should install it by visiting the website or [click here](https://nodejs.org/dist/v24.18.0/node-v24.18.0-x64.msi)_

_To install TypeScript open the command prompt or shell as run as administrator and type the command `npm install -g typescript`. To check whether it is installed or not we can run the command `tsc --version`._
