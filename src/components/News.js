import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Article from './Article';
import Loader from './Loader';
import Message from './Message';

const propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const News = ({ news, loading, error }) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="danger">{error}</Message>;
  }

  if (!news.length) {
    return <p>Sorry no articles found!</p>;
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

News.propTypes = propTypes;

News.defaultProps = {
  news: [],
  loading: false,
  error: '',
};

export default News;
