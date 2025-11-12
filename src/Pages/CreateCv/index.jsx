import React, { useState } from "react";
import Breadcrumbss from "./Components/Breadcrumbs";
import Pricing from "./Components/Pricing";
import Templates from "./Components/Templates";
import PreviewTemplate from "./Components/PreviewTemplate";
import UseTemplate from "./Components/UseTemplate";

const CreateCv = () => {
  const [activePage, setActivePage] = useState("pricing");

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbss activePage={activePage} setActivePage={setActivePage} />

      {/* Content switch */}
      {activePage === "pricing" && <Pricing />}
      {activePage === "templates" && (
        <Templates setActivePage={setActivePage} />
      )}
      {activePage === "createCv" && <UseTemplate />}
      {activePage === "previewTemplate" && <PreviewTemplate />}
    </>
  );
};

export default CreateCv;
