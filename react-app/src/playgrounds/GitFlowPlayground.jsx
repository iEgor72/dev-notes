import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

const SCENARIOS = [
  {
    value: "feature",
    label: "Новая фича",
    commands: `git checkout -b feature/new-section
git add .
git commit -m "Add new section"
git push -u origin feature/new-section`,
  },
  {
    value: "sync",
    label: "Синхронизация с main",
    commands: `git checkout main
git pull origin main
git checkout feature/new-section
git rebase main`,
  },
  {
    value: "conflict",
    label: "Конфликт при merge/rebase",
    commands: `git status
# открыть конфликтные файлы и исправить
git add .
git commit -m "Resolve conflict"`,
  },
  {
    value: "stash",
    label: "Срочно переключиться на задачу",
    commands: `git stash
git checkout hotfix/urgent
# после завершения
git checkout -
git stash apply`,
  },
];

export default function GitFlowPlayground() {
  const [scenario, setScenario] = useState("feature");

  const selected = useMemo(
    () => SCENARIOS.find((item) => item.value === scenario) ?? SCENARIOS[0],
    [scenario]
  );

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: сценарии Git</h3>

      <label className="label" htmlFor="git-scenario">
        Сценарий
      </label>
      <select
        id="git-scenario"
        className="select"
        value={scenario}
        onChange={(event) => setScenario(event.target.value)}
      >
        {SCENARIOS.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <CodeBlock>{selected.commands}</CodeBlock>
    </div>
  );
}
