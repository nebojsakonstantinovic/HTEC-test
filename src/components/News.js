import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Article from './Article';

const News = ({ news }) => {
  return (
    <Row>
      {news.map(article => (
        <Col key={article.id} sm={12} md={6} lg={4}>
          <Article article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default News;
