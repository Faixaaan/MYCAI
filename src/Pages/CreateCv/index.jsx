import React, { useState } from "react";
import Breadcrumbss from "./Components/Breadcrumbs";
import Pricing from "./Components/Pricing";
import Templates from "./Components/Templates";


const CreateCv = () => {
  const [activePage, setActivePage] = useState("pricing");

  return (
    <>
      {/* Breadcrumbs bar */}
      <Breadcrumbss
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Toggle content based on state */}
      {activePage === "pricing" ? <Pricing /> : <Templates />}
    </>
  );
};

export default CreateCv;
