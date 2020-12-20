import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Article from './Article';
import Loader from './Loader';
import Message from './Message';

const News = ({ news, loading, error }) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="danger">{error}</Message>;
  }

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
