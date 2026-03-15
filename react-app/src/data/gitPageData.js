const gitPageData = {
  badge: "Git",
  title: "Шпаргалка по Git",
  subtitle:
    "Git простыми словами: как безопасно сохранять изменения, работать в ветках и не бояться конфликтов.",
  toc: [
    { id: "what-is-git", label: "Что такое Git" },
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
        {
          type: "note",
          content:
            "💡 Если проект уже есть на GitHub, почти всегда начинай с <code>git clone</code>, а не с <code>git init</code>.",
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
        {
          type: "note",
          content:
            "⚠️ Старайся коммитить логические части задачи, а не весь рабочий каталог разом.",
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
        {
          type: "note",
          content:
            "💡 Короткоживущие feature-ветки упрощают ревью и уменьшают риск конфликтов.",
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
        {
          type: "note",
          content:
            "⚠️ Перед первым push проверь URL remote через <code>git remote -v</code>, чтобы не отправить код не туда.",
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
        {
          type: "note",
          content:
            "💡 Удобно сохранять stash с сообщением: <code>git stash push -m \"wip: auth form\"</code>.",
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
          type: "text",
          content:
            "Ошибки в Git обычно происходят из-за спешки: коммиты без проверки, работа в main и пропуск синхронизации с remote.",
        },
        {
          type: "code",
          content: `# безопасная привычка перед push
git status
git log --oneline -5
git pull --rebase`,
        },
        {
          type: "note",
          content:
            "⚠️ Если не уверен в команде, сначала проверь её в отдельной ветке или на тестовом репозитории.",
        },
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
          type: "text",
          content:
            "Эти правила закрывают 80% повседневных задач и помогают безопасно работать в команде.",
        },
        {
          type: "code",
          content: `git status
git add <files>
git commit -m "feat: ..."` ,
        },
        {
          type: "note",
          content:
            "💡 Хорошая история коммитов ускоряет и код-ревью, и разбор инцидентов.",
        },
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