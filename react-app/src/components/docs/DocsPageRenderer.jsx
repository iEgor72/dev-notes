import DocsHero from "./DocsHero";
import DocsToc from "./DocsToc";
import SectionCard from "../ui/SectionCard";
import CodeBlock from "../ui/CodeBlock";
import Note from "../ui/Note";
import TableWrap from "../ui/TableWrap";
import TypographyPlayground from "../../playgrounds/TypographyPlayground";
import JsArrayPlayground from "../../playgrounds/JsArrayPlayground";
import TsNarrowingPlayground from "../../playgrounds/TsNarrowingPlayground";
import ReactUiPlayground from "../../playgrounds/ReactUiPlayground";
import GitFlowPlayground from "../../playgrounds/GitFlowPlayground";
import LayoutDecisionPlayground from "../../playgrounds/LayoutDecisionPlayground";
import ResponsivePlayground from "../../playgrounds/ResponsivePlayground";
import HtmlFormsPlayground from "../../playgrounds/HtmlFormsPlayground";
import HtmlTablesPlayground from "../../playgrounds/HtmlTablesPlayground";
import JsEventsPlayground from "../../playgrounds/JsEventsPlayground";

function renderInlineCode(content) {
  if (typeof content !== "string") {
    return content;
  }

  const parts = content.split(/(<code>.*?<\/code>)/g);

  return parts.map((part, index) => {
    const match = part.match(/^<code>(.*?)<\/code>$/);

    if (!match) {
      return part;
    }

    return <code key={index}>{match[1]}</code>;
  });
}

function renderBlock(block, index) {
  if (block.type === "text") {
    return <p key={index}>{renderInlineCode(block.content)}</p>;
  }

  if (block.type === "note") {
    return <Note key={index}>{renderInlineCode(block.content)}</Note>;
  }

  if (block.type === "code") {
    return <CodeBlock key={index}>{block.content}</CodeBlock>;
  }

  if (block.type === "list") {
    return (
      <ul key={index}>
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{renderInlineCode(item)}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <TableWrap key={index}>
        <table className="table">
          {block.caption ? <caption>{block.caption}</caption> : null}

          <thead>
            <tr>
              {block.columns.map((column, columnIndex) => (
                <th key={columnIndex} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    );
  }

  if (block.type === "subtitle") {
    return <h3 key={index}>{renderInlineCode(block.content)}</h3>;
  }

  if (block.type === "playground") {
    return <TypographyPlayground key={index} />;
  }

  if (block.type === "js-array-playground") {
    return <JsArrayPlayground key={index} />;
  }

  if (block.type === "ts-narrowing-playground") {
    return <TsNarrowingPlayground key={index} />;
  }

  if (block.type === "react-ui-playground") {
    return <ReactUiPlayground key={index} />;
  }

  if (block.type === "git-flow-playground") {
    return <GitFlowPlayground key={index} />;
  }

  if (block.type === "layout-decision-playground") {
    return <LayoutDecisionPlayground key={index} />;
  }

  if (block.type === "responsive-playground") {
    return <ResponsivePlayground key={index} />;
  }

  if (block.type === "html-forms-playground") {
    return <HtmlFormsPlayground key={index} />;
  }

  if (block.type === "html-tables-playground") {
    return <HtmlTablesPlayground key={index} />;
  }

  if (block.type === "js-events-playground") {
    return <JsEventsPlayground key={index} />;
  }

  return null;
}

function DocsPageRenderer({ page }) {
  return (
    <div className="page-stack">
      <DocsHero
        badge={page.badge}
        title={page.title}
        subtitle={page.subtitle}
      />

      <div className="docs-layout">
        <DocsToc items={page.toc} />

        <div className="docs-content">
          {page.sections.map((section) => (
            <SectionCard
              key={section.id}
              id={section.id}
              title={section.title}
              titleId={`${section.id}-title`}
            >
              {section.blocks.map((block, index) => renderBlock(block, index))}
            </SectionCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocsPageRenderer;
