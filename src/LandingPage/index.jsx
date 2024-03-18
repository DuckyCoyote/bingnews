import { useContext } from "react";

import { DataContext } from "../context/RequestContext.jsx";

import Button from "../components/button/Button.component.jsx";
import Card from "../components/card/Card.component.jsx";

import "./index.css";

const LandingPage = () => {
  const { updateCategory, notices } = useContext(DataContext);

  return (
    <section>
      <div className="button-section">
        <Button
          onClick={() => updateCategory("ScienceAndTechnology")}
          child="Digital"
        />
        <Button
          onClick={() => updateCategory("entertainment")}
          child="Entertainment"
        />
        <Button onClick={() => updateCategory("business")} child="Business" />
      </div>
      <div className="notices-section">
        {notices.map((notice) => {
          return <Card key={notice.name} notice={notice} />;
        })}
      </div>
    </section>
  );
};

export default LandingPage;
