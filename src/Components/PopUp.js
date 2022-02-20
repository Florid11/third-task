import { SketchPicker } from 'react-color';
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
          <div className='buttons'>
              <button className='themeBtn'>Change Theme</button>
              <p>{color1}<button onClick={() => setShowColor1(showColor1 => !showColor1)} className='pick' style={{backgroundColor: color1}}/> <span>{showColor1 && (<SketchPicker color1={color1} onChangeComplete={(color1) => {setColor1(color1.hex)}}/>)}</span></p>
              <p>{color2}<button onClick={() => setShowColor2(showColor2 => !showColor2)} className='pick' style={{backgroundColor: color2}}/><span>{showColor2 && (<SketchPicker color2={color2} onChangeComplete={(color2) => {setColor2(color2.hex)}}/>)}</span></p>
              <p>{color3}<button onClick={() => setShowColor3(showColor3 => !showColor3)} className='pick' style={{backgroundColor: color3}}/><span>{showColor3 && (<SketchPicker color3={color3} onChangeComplete={(color3) => {setColor3(color3.hex)}}/>)}</span></p>
              <p>{color4}<button onClick={() => setShowColor4(showColor4 => !showColor4)} className='pick' style={{backgroundColor: color4}}/><span>{showColor4 && (<SketchPicker color4={color4} onChangeComplete={(color4) => {setColor4(color4.hex)}}/>)}</span></p>
              <p>{color5}<button onClick={() => setShowColor5(showColor5 => !showColor5)} className='pick'  style={{backgroundColor: color5}}/><span>{showColor5 && (<SketchPicker color5={color5} onChangeComplete={(color5) => {setColor5(color5.hex)}}/>)}</span></p>
          </div>
          <div className='presp'  style={{color: color1}}>
              <h3>Theme Color</h3>
              <h4>Font Color</h4>
              <h4>Background Color</h4>
              <h4>Button Color</h4>
              <h4>Button Border Color</h4>
              <h4>Buttons Mouseover Color</h4>
          </div>
          <div className='btnBox'>
              <button onClick={cancelBtn} className='btn-p btnCancel'>Cancel</button>
              <button onClick={saveBtn} className='btn-p btnSave' style={{backgroundColor: color3, borderColor: color4}}>Save</button>
          </div>

      </div>
  )
}

export default PopUp;