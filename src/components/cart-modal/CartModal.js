import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { connect } from 'react-redux'
import { cartItemsTotalCostSelector } from '../../redux/selectors/cart-modal-selectors'
import CartItem from '../cart-item/cartItem'

function CartModal({ onClose, cartItems, open, totalCost }) {
  const handleClose = () => onClose()

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Cart</DialogTitle>
      <div
        style={{
          padding: '0 24px 16px 24px',
        }}
      >
        <div
          style={{
            borderTop: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
          }}
        >
          {cartItems
            ? cartItems.map(item => {
                return <CartItem key={item.id} cartItem={item} />
              })
            : null}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '5px',
          }}
        >

          Total:&nbsp;
          <b>
            {totalCost}
            {' '}
Lei
          </b>
        </div>
      </div>
    </Dialog>
  )
}

CartModal.propTypes = {
  totalCost: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object),
}

CartModal.defaultProps = {
  cartItems: [],
}

const mapStateToProps = state => ({
  totalCost: cartItemsTotalCostSelector(state),
})

export default connect(mapStateToProps)(CartModal)
