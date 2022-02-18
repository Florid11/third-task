const PopUp = (props) => {
    const cancelBtn = () => {
        props.onCancel();
    }

    const saveBtn = () => {
      props.onConfirm();
    }

  return(
      <div className='popup'>
          <h1>Hello</h1>
          <button onClick={cancelBtn} className='btnCancel'>Cancel</button>
          <button onClick={saveBtn} className='btnSave'>Save</button>
      </div>
  )
}

export default PopUp;