import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
  }),
};

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

Article.propTypes = propTypes;

Article.defaultProps = {
  article: {},
};

export default Article;
