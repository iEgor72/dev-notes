import HtmlToc from "./HtmlToc";
import WhatIsHtmlSection from "./sections/WhatIsHtmlSection";
import HowWebWorksSection from "./sections/HowWebWorksSection";
import HtmlElementStructureSection from "./sections/HtmlElementStructureSection";
import BasicStructureSection from "./sections/BasicStructureSection";
import HeadingsTextSection from "./sections/HeadingsTextSection";
import BlockInlineSection from "./sections/BlockInlineSection";
import MainTagsSection from "./sections/MainTagsSection";
import SimpleContentSection from "./sections/SimpleContentSection";
import ListsSection from "./sections/ListsSection";
import LinksSection from "./sections/LinksSection";
import ImagesSection from "./sections/ImagesSection";
import ContainersSection from "./sections/ContainersSection";
import FormsSection from "./sections/FormsSection";
import InputTypesSection from "./sections/InputTypesSection";
import SemanticTagsSection from "./sections/SemanticTagsSection";
import AttributesSection from "./sections/AttributesSection";
import MistakesSection from "./sections/MistakesSection";
import RememberSection from "./sections/RememberSection";
import PageExampleSection from "./sections/PageExampleSection";

function HtmlContent() {
  return (
    <div className="docs-layout">
      <HtmlToc />

      <div className="docs-content">
        <WhatIsHtmlSection />
        <HowWebWorksSection />
        <HtmlElementStructureSection />
        <BasicStructureSection />
        <HeadingsTextSection />
        <BlockInlineSection />
        <MainTagsSection />
        <SimpleContentSection />
        <ListsSection />
        <LinksSection />
        <ImagesSection />
        <ContainersSection />
        <FormsSection />
        <InputTypesSection />
        <SemanticTagsSection />
        <AttributesSection />
        <MistakesSection />
        <RememberSection />
        <PageExampleSection />
      </div>
    </div>
  );
}

export default HtmlContent;