import React from 'react'

const Modal = () => {
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Do you really want empty your shopping bag?</h4>
        <div className="btn-container">
            <button className='btn confirm-btn'>Ok</button>
            <button className='btn clear-btn'>No</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
