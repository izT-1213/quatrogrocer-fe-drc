import { useNavigate } from "react-router-dom";
import "./no-result.css";

function NoResultPage() {
  var input = "Thyme";
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="page-header">
        <h6>No result for "{input}"</h6>
      </div>
      <div className="page-content">
        <p>Try checking the spelling or search with more generic term.</p>
      </div>
      <div className="back-btn">
        <button onClick={() => navigate("/")}>BACK TO HOME</button>
      </div>
    </div>
  );
}

export default NoResultPage;
