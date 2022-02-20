import { ChromePicker } from 'react-color';
import {useState} from "react";

const PopUp = (props) => {
    const [themePop, setThemePop] =useState(false);
    const [color1, setColor1] = useState('#444444');
    const [color2, setColor2] = useState('#FFFFFF');
    const [color3, setColor3] = useState('#2072EF');
    const [color4, setColor4] = useState('#2072EF');
    const [color5, setColor5] = useState('#0053D1');
    const [showColor1, setShowColor1] = useState(false);
    const [showColor2, setShowColor2] = useState(false);
    const [showColor3, setShowColor3] = useState(false);
    const [showColor4, setShowColor4] = useState(false);
    const [showColor5, setShowColor5] = useState(false);

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
              <p>{color1}<button onClick={setShowColor1(showColor1 => !showColor1)} className='pick' style={{backgroundColor: color1}}/> <span>{showColor1 && (<ChromePicker color1={color1} onChangeComplete={(color1) => {setColor1(color1.hex)}}/>)}</span></p>
              <p>{color2}<button onClick={setShowColor2(showColor2 => !showColor2)} className='pick' style={{backgroundColor: color2}}/><span>{showColor2 && (<ChromePicker color2={color2} onChangeComplete={(color2) => {setColor2(color2.hex)}}/>)}</span></p>
              <p>{color3}<button onClick={setShowColor3(showColor3 => !showColor3)} className='pick' style={{backgroundColor: color3}}/><span>{showColor3 && (<ChromePicker color3={color3} onChangeComplete={(color3) => {setColor3(color3.hex)}}/>)}</span></p>
              <p>{color4}<button onClick={setShowColor4(showColor4 => !showColor4)} className='pick' style={{backgroundColor: color4}}/><span>{showColor4 && (<ChromePicker color4={color4} onChangeComplete={(color4) => {setColor4(color4.hex)}}/>)}</span></p>
              <p>{color5}<button onClick={setShowColor5(showColor5 => !showColor5)} className='pick'  style={{backgroundColor: color5}}/><span>{showColor5 && (<ChromePicker color5={color5} onChangeComplete={(color5) => {setColor5(color5.hex)}}/>)}</span></p>
          </div>
          <div className='presp'  style={{color1}}>
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