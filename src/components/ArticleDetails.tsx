import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ArticleObj } from "../interfaces/ArticleObj";
import { Link } from "react-router-dom";

const ArticleDetails = () => {
  const baseEndPoint = "https://api.spaceflightnewsapi.net/v4/articles/";
  const { id } = useParams();
  const [article, setArticles] = useState<null | ArticleObj>(null);
  useEffect(() => {
    fetch(baseEndPoint + id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((artObj) => {
        setArticles(artObj);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="mt-5">
      <Card className="text-center">
        <Card.Img variant="top" height={400} src={article?.image_url} />
        <Card.Body>
          <Card.Title>{article?.title}</Card.Title>
          <Card.Text>
            {article?.summary}{" "}
            <a href={article?.url} rel="noreferrer" target="_blank">
              article's source
            </a>
          </Card.Text>

          <Link to={"/"}>
            <Button variant="primary">Home</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          published: {article?.published_at} update at: {article?.update_at}
        </Card.Footer>
      </Card>
    </Container>
  );
};
export default ArticleDetails;
