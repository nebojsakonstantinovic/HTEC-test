import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import news from '../news';

const ArticleScreen = ({ match }) => {
  const article = news.find(art => art.id === match.params.id);

  if (!article) {
    return (
      <>
        <div>Sorry this article does not exist</div>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
      </>
    );
  }

  return (
    <>
      <Row>
        <Col sm={12}>
          <h2>{article.title}</h2>
        </Col>
        <Col sm={12}>
          <Image
            src={article.urlToImage}
            alt={article.title}
            className="w-100 py-3"
          />
        </Col>
        <Col sm={12}>{article.content || article.description}</Col>
      </Row>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
    </>
  );
};

export default ArticleScreen;
