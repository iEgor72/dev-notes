const gitPageData = {
  badge: "Git",
  title: "Шпаргалка по Git",
  subtitle:
    "Git простыми словами: как безопасно сохранять изменения, работать в ветках и не бояться конфликтов.",
  toc: [
    { id: "what-is-git", label: "Что такое Git" },
    { id: "git-format", label: "Как читать разделы" },
    { id: "init-clone", label: "git init и git clone" },
    { id: "status-add-commit", label: "status / add / commit" },
    { id: "log", label: "git log" },
    { id: "branches", label: "Ветки" },
    { id: "merge", label: "merge" },
    { id: "rebase", label: "rebase" },
    { id: "conflicts", label: "Конфликты и их решение" },
    { id: "remote", label: "Удалённый репозиторий" },
    { id: "pull-push", label: "pull и push" },
    { id: "stash", label: "stash" },
    { id: "gitignore", label: ".gitignore" },
    { id: "git-mistakes", label: "Частые ошибки" },
    { id: "git-remember", label: "Что важно запомнить" },
  ],
  sections: [
    {
      id: "what-is-git",
      title: "Что такое Git",
      blocks: [
        {
          type: "text",
          content:
            "Git хранит историю изменений проекта и помогает откатываться, если что-то пошло не так.",
        },
        {
          type: "text",
          content:
            "С Git проще работать в команде: каждый делает свою задачу в отдельной ветке, потом изменения объединяются.",
        },
        {
          type: "note",
          content:
            "Git — это инструмент, а GitHub / GitLab / Bitbucket — это сервисы, где можно хранить репозитории.",
        },
      ],
    },
    {
      id: "git-format",
      title: "Как читать разделы",
      blocks: [
        {
          type: "subtitle",
          content: "Простыми словами",
        },
        {
          type: "text",
          content:
            "Сначала — что делает команда и зачем она нужна.",
        },
        {
          type: "subtitle",
          content: "Когда применять",
        },
        {
          type: "text",
          content:
            "Дальше — в какой рабочей ситуации ты её используешь.",
        },
        {
          type: "subtitle",
          content: "Частая ошибка",
        },
        {
          type: "text",
          content:
            "И сразу — какая ошибка встречается чаще всего и как её избежать.",
        },
      ],
    },
    {
      id: "init-clone",
      title: "git init и git clone",
      blocks: [
        {
          type: "text",
          content:
            "Для начала работы с репозиторием его можно создать локально или клонировать готовый.",
        },
        {
          type: "code",
          content: `git init`,
        },
        {
          type: "code",
          content: `git clone https://github.com/user/project.git`,
        },
        {
          type: "list",
          items: [
            "git init — создаёт новый локальный репозиторий",
            "git clone — скачивает существующий удалённый репозиторий",
          ],
        },
      ],
    },
    {
      id: "status-add-commit",
      title: "status / add / commit",
      blocks: [
        {
          type: "text",
          content:
            "Это базовый ежедневный цикл работы с Git.",
        },
        {
          type: "code",
          content: `git status
git add .
git commit -m "Добавил страницу React"`,
        },
        {
          type: "table",
          caption: "Базовые команды Git",
          columns: ["Команда", "Что делает"],
          rows: [
            ["<code>git status</code>", "Показывает текущее состояние файлов"],
            ["<code>git add .</code>", "Добавляет изменения в staging area"],
            ["<code>git commit -m \"...\"</code>", "Создаёт коммит"],
          ],
        },
      ],
    },
    {
      id: "log",
      title: "git log",
      blocks: [
        {
          type: "text",
          content:
            "Команда git log показывает историю коммитов.",
        },
        {
          type: "code",
          content: `git log
git log --oneline`,
        },
        {
          type: "note",
          content:
            "В ежедневной работе часто удобнее использовать git log --oneline.",
        },
      ],
    },
    {
      id: "branches",
      title: "Ветки",
      blocks: [
        {
          type: "text",
          content:
            "Ветки позволяют работать над разными задачами отдельно от основной линии разработки.",
        },
        {
          type: "code",
          content: `git branch
git branch feature/header
git checkout feature/header
git checkout -b feature/footer`,
        },
        {
          type: "list",
          items: [
            "git branch — показать ветки",
            "git checkout branch-name — перейти в ветку",
            "git checkout -b new-branch — создать и сразу переключиться",
          ],
        },
      ],
    },
    {
      id: "merge",
      title: "merge",
      blocks: [
        {
          type: "text",
          content:
            "Merge объединяет изменения из одной ветки в другую.",
        },
        {
          type: "code",
          content: `git checkout main
git merge feature/header`,
        },
        {
          type: "note",
          content:
            "Обычно сначала переходят в ту ветку, в которую хотят влить изменения.",
        },
      ],
    },
    {
      id: "rebase",
      title: "rebase",
      blocks: [
        {
          type: "text",
          content:
            "Rebase переписывает историю так, как будто работа шла от более свежего состояния ветки.",
        },
        {
          type: "code",
          content: `git checkout feature/header
git rebase main`,
        },
        {
          type: "note",
          content:
            "Rebase делает историю чище, но использовать его нужно аккуратно, особенно в общей ветке.",
        },
      ],
    },
    {
      id: "conflicts",
      title: "Конфликты и их решение",
      blocks: [
        {
          type: "text",
          content:
            "Конфликт — это когда Git не понял, какую версию кода оставить.",
        },
        {
          type: "git-flow-playground",
        },
        {
          type: "code",
          content: `git pull origin main
# если есть конфликт:
# 1) открыть конфликтные файлы
# 2) вручную выбрать итоговый код
git add .
git commit -m "Resolve merge conflict"`,
        },
        {
          type: "table",
          caption: "Быстрый алгоритм при конфликте",
          columns: ["Шаг", "Что делать"],
          rows: [
            ["1", "Посмотреть конфликтные файлы через <code>git status</code>"],
            ["2", "Открыть файл и убрать маркеры <<<<<<<, =======, >>>>>>>"],
            ["3", "Оставить корректный итоговый код"],
            ["4", "Сделать <code>git add</code> и завершить commit/rebase"],
          ],
        },
      ],
    },
    {
      id: "remote",
      title: "Удалённый репозиторий",
      blocks: [
        {
          type: "text",
          content:
            "Удалённый репозиторий нужен для совместной работы и хранения проекта на сервере.",
        },
        {
          type: "code",
          content: `git remote -v
git remote add origin https://github.com/user/project.git`,
        },
      ],
    },
    {
      id: "pull-push",
      title: "pull и push",
      blocks: [
        {
          type: "text",
          content:
            "Pull подтягивает изменения с сервера, push отправляет локальные коммиты в удалённый репозиторий.",
        },
        {
          type: "code",
          content: `git pull origin main
git push origin main`,
        },
        {
          type: "note",
          content:
            "Перед push полезно сначала сделать pull, чтобы синхронизироваться с удалённой веткой.",
        },
      ],
    },
    {
      id: "stash",
      title: "stash",
      blocks: [
        {
          type: "text",
          content:
            "stash временно убирает текущие изменения, если нужно быстро переключиться на другую задачу.",
        },
        {
          type: "code",
          content: `git stash
git stash list
git stash apply`,
        },
      ],
    },
    {
      id: "gitignore",
      title: ".gitignore",
      blocks: [
        {
          type: "text",
          content:
            ".gitignore позволяет исключить файлы и папки из отслеживания Git.",
        },
        {
          type: "code",
          content: `node_modules
dist
.env
.DS_Store`,
        },
        {
          type: "note",
          content:
            "Обычно в .gitignore добавляют зависимости, сборку, временные файлы и секреты.",
        },
      ],
    },
    {
      id: "git-mistakes",
      title: "Частые ошибки",
      blocks: [
        {
          type: "table",
          caption: "Типичные ошибки при работе с Git",
          columns: ["Ошибка", "Почему плохо", "Как лучше"],
          rows: [
            [
              "Коммитить всё подряд",
              "История становится грязной",
              "Делать логичные и небольшие коммиты",
            ],
            [
              "Работать всё время в main",
              "Риск сломать основной код",
              "Использовать feature-ветки",
            ],
            [
              "Не делать pull перед push",
              "Можно получить конфликты и расхождения",
              "Сначала синхронизироваться с удалённым репозиторием",
            ],
            [
              "Бездумно использовать rebase",
              "Можно переписать историю и запутать команду",
              "Понимать, когда нужен merge, а когда rebase",
            ],
          ],
        },
      ],
    },
    {
      id: "git-remember",
      title: "Что важно запомнить",
      blocks: [
        {
          type: "list",
          items: [
            "Делай маленькие понятные коммиты",
            "Работай в ветках, а не в main напрямую",
            "Перед push лучше синхронизироваться (pull/rebase)",
            "Конфликты — это нормально, их можно спокойно разобрать",
            ".gitignore лучше настроить в самом начале",
          ],
        },
      ],
    },
  ],
};

export default gitPageData;