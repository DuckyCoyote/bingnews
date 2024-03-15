import Card from "../components/card/Card.component.jsx";

import useNewRequest from "../api/Request.jsx";

import "./index.css";

const LandingPage = () => {
  let category = "business";
  const notices = useNewRequest(category);

  const handleClick = () => {
    category = "sports";
  };

  return (
    <div className="notices-section">
      <button onClick={handleClick} />
      {notices.map((notice) => {
        return <Card key={notice.name} notice={notice} />;
      })}
    </div>
  );
};

export default LandingPage;
