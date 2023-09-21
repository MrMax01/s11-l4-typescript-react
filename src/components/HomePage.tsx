import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Article from "./Article";
import { PageArticles } from "../interfaces/PageArticles";
import { ArticleObj } from "../interfaces/ArticleObj";

const HomePage = () => {
  const [articles, setArticles] = useState<null | PageArticles>(null);
  const baseEndPoint = "https://api.spaceflightnewsapi.net/v4/articles";

  useEffect(() => {
    fetch(baseEndPoint)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((articleObj) => {
        setArticles(articleObj);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <h1 className="text-center"> Articles</h1>
      <Row>
        {articles?.results.map((article: ArticleObj) => (
          <Col key={article.id}>
            <Article data={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default HomePage;
