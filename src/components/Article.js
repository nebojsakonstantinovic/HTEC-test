import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Article = ({ article }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/article/${article.id}`}>
        <Card.Title as="div">
          <strong>{article.title}</strong>
        </Card.Title>
      </Link>
      <Link to={`/article/${article.id}`}>
        <Card.Img src={article.urlToImage} alt={article.title} variant="top" />
      </Link>
      <Card.Body>
        <Card.Text as="div">{article.description}</Card.Text>
        <Card.Text as="div" className="d-flex justify-content-end">
          <Link
            to={`/article/${article.id}`}
            className="d-inline-block ml-auto"
          >
            More {'>'}
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Article;
