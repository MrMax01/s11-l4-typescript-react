import React from "react";
import { Button, Card } from "react-bootstrap";
import { ArticleObj } from "../interfaces/ArticleObj";
import { Link } from "react-router-dom";

interface SingleArticleProps {
  data: ArticleObj;
}
const Article = ({ data }: SingleArticleProps) => {
  return (
    <Card>
      <Card.Img variant="top" height={200} src={data.image_url} />
      <Card.Body>
        <Card.Title className="two-line-ellipsis ">{data.title}</Card.Title>
        <Card.Text className="two-line-ellipsis ">{data.summary}</Card.Text>
        <Link to={"/ArticleDetails/" + data.id}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Article;
