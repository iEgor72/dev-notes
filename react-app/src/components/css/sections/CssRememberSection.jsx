import SectionCard from "../../ui/SectionCard";

function CssRememberSection() {
  return (
    <SectionCard
      id="css-remember"
      title="Что важно запомнить"
      titleId="css-remember-title"
    >
      <ul>
        <li>CSS отвечает за внешний вид, а не за структуру</li>
        <li>Селектор выбирает элемент, свойство задаёт поведение</li>
        <li>Понимание box model очень важно</li>
        <li>Flexbox удобен для одной оси, Grid — для двух</li>
        <li>Адаптивность лучше продумывать заранее</li>
        <li>Старайся писать стили предсказуемо и системно</li>
      </ul>
    </SectionCard>
  );
}

export default CssRememberSection;