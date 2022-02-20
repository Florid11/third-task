import { ColorPicker } from 'material-ui-color';
import {useState} from "react";

const PopUp = (props) => {
    const [themePop, setThemePop] =useState(false);
    const [color, setColor] = useState('#000000');

    const cancelBtn = () => {
        props.onCancel();
    }

    const chooseTheme = () => {
      setThemePop(true);
    }

    const saveBtn = () => {
        props.onConfirm();
    }

  return(
      <div className='popup'>
          <div className='buttons'>
              <button className='themeBtn'>Change Theme</button>
              <p><ColorPicker onChangeComplete={(color) => {setColor(color.hex)}} defaultValue={color}/></p>
              <p><ColorPicker onChange={(color) =>{setColor(color.hex)}} defaultValue='transparent'/></p>
              <p><ColorPicker onChange={(color) =>{setColor(color.hex)}} defaultValue='transparent'/></p>
              <p><ColorPicker onChange={(color) =>{setColor(color.hex)}} defaultValue='transparent'/></p>
              <p><ColorPicker onChange={(color) =>{setColor(color.hex)}} defaultValue='transparent'/></p>
          </div>
          <div className='presp'  style={{color: color}}>
              <h3>Theme Color</h3>
              <h4>Font Color</h4>
              <h4>Background Color</h4>
              <h4>Button Color</h4>
              <h4>Button Border Color</h4>
              <h4>Buttons Mouseover Color</h4>
          </div>
          <div className='btnBox'>
              <button onClick={cancelBtn} className='btn-p btnCancel'>Cancel</button>
              <button onClick={saveBtn} className='btn-p btnSave'>Save</button>
          </div>

      </div>
  )
}

export default PopUp;