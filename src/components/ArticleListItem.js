import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import ArticleSlide from './ArticleSlide';

const ArticleListItem = ({
  categoryIndex,
  changeSlide,
  category,
  categoryObj,
}) => {
  const { loading, articles, error } = categoryObj[category];

  const article =
    !!articles && articles.find((_, index) => index === categoryIndex);

  const goPrev = changeSlide(category, -1);
  const goNext = changeSlide(category, 1);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="danger">{error}</Message>;
  }

  if (!article) {
    return <div>No aticles!</div>;
  }

  return (
    <>
      <Row>
        <Col sm={12} className="d-flex justify-content-between mb-2">
          <Button className="btn btn-light" onClick={goPrev}>
            prev
          </Button>
          <Button className="btn btn-light" onClick={goNext}>
            next
          </Button>
        </Col>
        <Col sm={12}>
          <ArticleSlide article={article} />
        </Col>
      </Row>
    </>
  );
};

ArticleListItem.defaultProps = {
  categoryObj: {},
};

export default ArticleListItem;
