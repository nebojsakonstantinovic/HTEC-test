import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategorySingleScreen from './screens/CategorySingleScreen';
import SearchScreen from './screens/SearchScreen';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/article/:id" component={ArticleScreen} />
            <Route path="/categories" component={CategoriesScreen} exact />
            <Route
              path="/categories/:category"
              component={CategorySingleScreen}
            />
            <Route path="/search" component={SearchScreen} exact />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
