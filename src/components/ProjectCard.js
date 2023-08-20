import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, imgUrl, Link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
      <div className="proj-link">
        <a href={Link}></a>
      </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  )
}
