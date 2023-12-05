/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, LinkGITHUB }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
         <a className="LinkForGitHub" href={LinkGITHUB} target="_blank" rel="noopener noreferrer"> <span>{description}</span></a>
        </div>
      </div>
    </Col>
  )
}