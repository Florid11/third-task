import { ColorPicker } from 'material-ui-color';

const PopUp = (props) => {
    const cancelBtn = () => {
        props.onCancel();
    }

    const saveBtn = () => {
      props.onConfirm();
    }

  return(
      <div className='popup'>
          <div className='presp'>
              <h3>Theme Color</h3>
              <h4>Font Color</h4>
              <h4>Background Color</h4>
              <h4>Button Color</h4>
              <h4>Button Border Color</h4>
              <h4>Buttons Mouseover Color</h4>
          </div>
          <div className='buttons'>
              <button className='themeBtn'>Change Theme</button>
              <p><ColorPicker onChange='/' defaultValue='#000000'/></p>
              <p><ColorPicker onChange='/' defaultValue='transparent'/></p>
              <p><ColorPicker onChange='/' defaultValue='transparent'/></p>
              <p><ColorPicker onChange='/' defaultValue='transparent'/></p>
              <p><ColorPicker onChange='/' defaultValue='transparent'/></p>
          </div>
          <div className='btnBox'>
              <button onClick={cancelBtn} className='btn-p btnCancel'>Cancel</button>
              <button onClick={saveBtn} className='btn-p btnSave'>Save</button>
          </div>

      </div>
  )
}

export default PopUp;