import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import news from '../news';

const ArticleListItem = ({ categoryIndex, changeSlide, category }) => {
  const article = news.find((_, index) => index === categoryIndex);

  const goPrev = changeSlide(category, -1);

  const goNext = changeSlide(category, 1);

  if (!article) {
    return <div>No aticles!</div>;
  }

  return (
    <>
      <Row>
        <Col sm={12} className="d-flex justify-content-between">
          <span
            className="btn btn-light"
            role="button"
            tabIndex={0}
            onClick={goPrev}
            onKeyDown={() => {}}
          >
            prev
          </span>
          <span
            className="btn btn-light"
            role="button"
            tabIndex={0}
            onClick={goNext}
            onKeyDown={() => {}}
          >
            next
          </span>
        </Col>
        <Col sm={12}>
          <Card>
            <Row>
              <Col sm={12} lg={6}>
                <Card.Img src={article.urlToImage} alt={article.title} />
              </Col>
              <Col sm={12} lg={6} className="pt-2 pl-4">
                <h2>{article.title}</h2>
                <p>{article.content || article.description}</p>
              </Col>

              {/* <Col sm={12}>{article.content || article.description}</Col> */}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ArticleListItem;
