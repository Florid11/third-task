import { ChromePicker } from 'react-color';
import {useState} from "react";

const PopUp = (props) => {

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

    const saveBtn = () => {
        props.onConfirm();
    }

  return(
      <div className='popup' style={{backgroundColor: color2}}>
          <div className='presp'  style={{color: color1}}>
              <div>
                  <h3>Theme Color</h3>
                  <button className='themeBtn'>Change Theme</button>
              </div>
              <div>
                  <h4>Font Color</h4>
                  <p>{color1}<button onClick={() => setShowColor1(showColor1 => !showColor1)} className='pick' style={{backgroundColor: color1}}/> <span>{showColor1 && (<ChromePicker color={color1} onChange={(color1) => {setColor1(color1.hex)}}/>)}</span></p>
              </div>
              <div>
                  <h4>Background Color</h4>
                  <p>{color2}<button onClick={() => setShowColor2(showColor2 => !showColor2)} className='pick' style={{backgroundColor: color2}}/><span>{showColor2 && (<ChromePicker color={color2} onChange={(color2) => {setColor2(color2.hex)}}/>)}</span></p>
              </div>
              <div>
                  <h4>Button Color</h4>
                  <p>{color3}<button onClick={() => setShowColor3(showColor3 => !showColor3)} className='pick' style={{backgroundColor: color3}}/><span>{showColor3 && (<ChromePicker color={color3} onChange={(color3) => {setColor3(color3.hex)}}/>)}</span></p>
              </div>
              <div>
                  <h4>Button Border Color</h4>
                  <p>{color4}<button onClick={() => setShowColor4(showColor4 => !showColor4)} className='pick' style={{backgroundColor: color4}}/><span>{showColor4 && (<ChromePicker color={color4} onChange={(color4) => {setColor4(color4.hex)}}/>)}</span></p>
              </div>
              <div>
                  <h4>Buttons Mouseover Color</h4>
                  <p>{color5}<button onClick={() => setShowColor5(showColor5 => !showColor5)} className='pick'  style={{backgroundColor: color5}}/><span>{showColor5 && (<ChromePicker color={color5} onChange={(color5) => {setColor5(color5.hex)}}/>)}</span></p>
              </div>
          </div>

          <div className='btnBox'>
              <button onClick={cancelBtn} className='btn-p btnCancel'>Cancel</button>
              <button onClick={saveBtn} className='btn-p btnSave' style={{backgroundColor: color3, borderColor: color4}}>Save</button>
          </div>

      </div>
  )
}

export default PopUp;