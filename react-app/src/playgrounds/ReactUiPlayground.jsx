import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

export default function ReactUiPlayground() {
  const [name, setName] = useState("Alex");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const statusText = useMemo(
    () => (isLoggedIn ? `Привет, ${name || "пользователь"}!` : "Вы вошли как гость"),
    [isLoggedIn, name]
  );

  const code = `const [name, setName] = useState("${name || ""}");
const [isLoggedIn, setIsLoggedIn] = useState(${isLoggedIn});
const [count, setCount] = useState(${count});

return (
  <div>
    {isLoggedIn ? <p>Привет, {name}</p> : <p>Гость</p>}
    <button onClick={() => setCount(count + 1)}>{count}</button>
  </div>
);`;

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: state + conditional rendering</h3>

      <label className="label" htmlFor="react-ui-name">
        Имя пользователя
      </label>
      <input
        id="react-ui-name"
        className="input"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label className="label" htmlFor="react-ui-login">
        Статус
      </label>
      <select
        id="react-ui-login"
        className="select"
        value={isLoggedIn ? "logged" : "guest"}
        onChange={(event) => setIsLoggedIn(event.target.value === "logged")}
      >
        <option value="guest">Гость</option>
        <option value="logged">Авторизован</option>
      </select>

      <div className="card playground-preview-card">
        <div
          className="playground-stage"
          style={{
            minHeight: "120px",
            overflow: "hidden",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p style={{ margin: 0 }}>{statusText}</p>
          <button type="button" className="button button--secondary" onClick={() => setCount((prev) => prev + 1)}>
            Счетчик: {count}
          </button>
        </div>
      </div>

      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}
