import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import ProductList from '../product-list/product-list'
import ProductDetails from '../product-details/product-details'
import Snack from '../snack-bar/SnackBar'
import ConfirmationDialog from '../confirm-dialog/confirm-dialog'

const styles = {
  bodyWrapper: {
    backgroundColor: '#f5f5f5',
    minHeight: '90vh',
  },
  listWrapper: {
    maxWidth: '940px',
    margin: 'auto',
    padding: '25px 0',
  },
}

const Layout = ({ classes }) => {
  return (
    <Fragment>
      <Snack />
      <ConfirmationDialog />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            render={() => (
              <div className={classes.listWrapper}>
                <ProductList />
              </div>
            )}
            exact
            path="/"
          />
          <Route
            path="/product/:id"
            render={params => <ProductDetails {...params} />}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withStyles(styles)(Layout)
