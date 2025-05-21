
import React from 'react';

const Section = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-700">{title}</h2>
    <div className="space-y-4 text-gray-300">{children}</div>
  </div>
);

export default function Cheatsheet() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">zash Reactt Cheatsheet</h1>

      <Section title="1. JSX">
        <p>JSX lets you write HTML in JavaScript:</p>
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto"><code>{`const element = <h1>Hello, world!</h1>;`}</code></pre>
        <p>This compiles to React.createElement calls under the hood.</p>
      </Section>

      <Section title="2. Functional Component">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto"><code>{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}</code></pre>
        <p>Props are passed as arguments, and JSX is returned.</p>
      </Section>

      <Section title="More Coming Soon...">
        <p>Stay tuned for state, hooks, routing, testing, and more!</p>
      </Section>
    </main>
  );
}
