
# zash Reactt – React Cheatsheet (Beginner to Advanced)

A comprehensive single-page cheatsheet covering all major React concepts with explanations and examples.

---

## 📘 1. JSX

JSX allows you to write HTML-like syntax in JavaScript:

```jsx
const element = <h1>Hello, world!</h1>;
```

This compiles to:

```js
React.createElement('h1', null, 'Hello, world!');
```

---

## 🧩 2. Functional Components

A function that returns JSX:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

## 🎁 3. Props

Props are inputs to components:

```jsx
function Greet(props) {
  return <p>{props.message}</p>;
}
<Greet message="Hello there!" />
```

---

## 🔁 4. State (useState)

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

---

## ⏱️ 5. useEffect Hook

Perform side effects (like fetching data):

```jsx
import { useEffect } from 'react';

useEffect(() => {
  console.log("Component mounted");
}, []);
```

---

## 🖱️ 6. Handling Events

```jsx
function ClickMe() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click</button>;
}
```

---

## 🔀 7. Conditional Rendering

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

## 🔢 8. Lists & Keys

```jsx
const items = ['A', 'B', 'C'];
{items.map((item, index) => <li key={index}>{item}</li>)}
```

---

## ✍️ 9. Forms (Controlled Components)

```jsx
function Form() {
  const [name, setName] = useState('');
  return (
    <input value={name} onChange={e => setName(e.target.value)} />
  );
}
```

---

## 📤 10. Lifting State Up

Move shared state to the closest common ancestor.

---

## 🌍 11. Context API

```jsx
const ThemeContext = React.createContext('dark');

function App() {
  return (
    <ThemeContext.Provider value="light">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

---

## 🔎 12. Refs

```jsx
const inputRef = useRef();

function focusInput() {
  inputRef.current.focus();
}
```

---

## 🛠️ 13. Custom Hooks

```jsx
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, increment: () => setCount(c => c + 1) };
}
```

---

## 🧱 14. Error Boundaries

Catch rendering errors:

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
  }
}
```

---

## 🧭 15. React Router (v6)

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## 💤 16. Lazy Loading

```jsx
const LazyComp = React.lazy(() => import('./LazyComp'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComp />
</Suspense>
```

---

## ⚙️ 17. useReducer

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## ⚡ 18. useMemo / useCallback

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

---

## 🌐 19. Portals

```jsx
ReactDOM.createPortal(child, document.getElementById('modal-root'));
```

---

## ⏳ 20. Suspense & Concurrent Features

Used for async UI rendering with fallback.

---

## 🧪 21. Testing

Use Jest + React Testing Library:

```js
test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

---

## 📤 Deployment

Use Vercel or GitHub Pages:
```bash
npm run build
```

Deploy the `dist/` folder or connect repo to Vercel.

---

Made with ❤️ for zash Reactt.
