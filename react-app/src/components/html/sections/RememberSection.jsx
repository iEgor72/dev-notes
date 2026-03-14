import SectionCard from "../../ui/SectionCard";

function RememberSection() {
  return (
    <SectionCard
      id="remember"
      title="Что важно запомнить"
      titleId="remember-title"
    >
      <ul>
        <li>HTML отвечает за структуру страницы</li>
        <li>CSS отвечает за внешний вид</li>
        <li>JavaScript отвечает за поведение</li>
        <li>Используй семантические теги там, где есть смысл</li>
        <li>Добавляй <code>alt</code> для изображений</li>
        <li>Связывай <code>label</code> и <code>input</code> в формах</li>
        <li>Не выбирай заголовки по размеру — выбирай их по смыслу</li>
        <li>
          <code>div</code> и <code>span</code> — это контейнеры, а не
          смысловые элементы
        </li>
      </ul>
    </SectionCard>
  );
}

export default RememberSection;