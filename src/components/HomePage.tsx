import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Article from "./Article";
interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  update_at: string;
  featured: boolean;
}
interface PageArticles {
  count: string;
  next: string | null;
  previus: string | null;
  results: Article[];
}

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
        {articles?.results.map((article) => (
          <Col key={article.id}>
            <Article />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default HomePage;
