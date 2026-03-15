import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import TableWrap from "../../ui/TableWrap";

function CssMistakesSection() {
  return (
    <SectionCard
      id="css-mistakes"
      title="Частые ошибки"
      titleId="css-mistakes-title"
    >
      <p>
        Большинство проблем в CSS появляется не из-за "сложных свойств", а из-за
        хаотичной структуры селекторов и отступов.
      </p>

      <CodeBlock>
        {`.layout {
  display: grid;
  gap: 16px; /* лучше, чем каскад margin у детей */
}

.button {
  padding: 8px 12px;
}

/* избегай !important, если можно поднять специфичность структурой */`}
      </CodeBlock>

      <Note>💡 Сначала упрощай структуру, и только потом "лечи" отдельный баг.</Note>

      <TableWrap>
        <table className="table">
          <caption>Типичные ошибки при работе с CSS</caption>

          <thead>
            <tr>
              <th scope="col">Ошибка</th>
              <th scope="col">Почему плохо</th>
              <th scope="col">Как лучше</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Слишком много !important</td>
              <td>Ломает предсказуемость стилей</td>
              <td>Лучше выстроить нормальную структуру селекторов</td>
            </tr>
            <tr>
              <td>Стилизация всего через id</td>
              <td>Снижает гибкость</td>
              <td>Чаще использовать классы</td>
            </tr>
            <tr>
              <td>Фиксированные размеры везде</td>
              <td>Ломает адаптивность</td>
              <td>Использовать %, fr, rem, minmax</td>
            </tr>
            <tr>
              <td>Игнорирование box model</td>
              <td>Отступы и размеры ведут себя неожиданно</td>
              <td>Понимать content / padding / border / margin</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </SectionCard>
  );
}

export default CssMistakesSection;