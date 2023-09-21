import React from "react";
import { Card } from "react-bootstrap";
import { ArticleObj } from "../interfaces/ArticleObj";

interface SingleArticleProps {
  data: ArticleObj;
}
const Article = ({ data }: SingleArticleProps) => {
  return <Card></Card>;
};

export default Article;
