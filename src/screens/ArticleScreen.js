import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { disableLanguageChange } from '../actions/languageActions';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const ArticleScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  const { articles } = news;

  const article = articles.find(art => art.id === match.params.id);

  useEffect(() => {
    dispatch(disableLanguageChange(true));
    return () => {
      dispatch(disableLanguageChange(false));
    };
  }, [dispatch]);

  if (!article) {
    return (
      <>
        <div>Sorry this article does not exist</div>
        <Link className="btn btn-light my-3" to="/">
          Go back to Home
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
      <Button className="btn btn-light my-3" onClick={() => history.goBack()}>
        Go Back
      </Button>
    </>
  );
};

ArticleScreen.propTypes = propTypes;

export default ArticleScreen;
