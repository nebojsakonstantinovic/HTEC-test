import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const ArticleSlide = ({ article }) => {
  return (
    <Card>
      <Row>
        <Col sm={12} lg={6}>
          <Card.Img src={article.urlToImage} alt={article.title} />
        </Col>
        <Col sm={12} lg={6} className="pt-2 pl-4">
          <h2>{article.title}</h2>
          <p>{article.content || article.description}</p>
        </Col>
      </Row>
    </Card>
  );
};

export default ArticleSlide;
