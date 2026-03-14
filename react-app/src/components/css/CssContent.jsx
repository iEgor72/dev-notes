import CssToc from "./CssToc";

import WhatIsCssSection from "./sections/WhatIsCssSection";
import ConnectCssSection from "./sections/ConnectCssSection";
import CssSyntaxSection from "./sections/CssSyntaxSection";
import SelectorsSection from "./sections/SelectorsSection";
import ColorsSection from "./sections/ColorsSection";
import TextStylesSection from "./sections/TextStylesSection";
import BoxModelSection from "./sections/BoxModelSection";
import DisplaySection from "./sections/DisplaySection";
import PositionSection from "./sections/PositionSection";
import FlexboxSection from "./sections/FlexboxSection";
import GridSection from "./sections/GridSection";
import ResponsiveSection from "./sections/ResponsiveSection";
import CssMistakesSection from "./sections/CssMistakesSection";
import CssRememberSection from "./sections/CssRememberSection";

function CssContent() {
  return (
    <div className="docs-layout">
      <CssToc />

      <div className="docs-content">
        <WhatIsCssSection />
        <ConnectCssSection />
        <CssSyntaxSection />
        <SelectorsSection />
        <ColorsSection />
        <TextStylesSection />
        <BoxModelSection />
        <DisplaySection />
        <PositionSection />
        <FlexboxSection />
        <GridSection />
        <ResponsiveSection />
        <CssMistakesSection />
        <CssRememberSection />
      </div>
    </div>
  );
}

export default CssContent;