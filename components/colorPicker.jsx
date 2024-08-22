import ReactGPicker from 'react-gcolor-picker';
import "@/css/colorPicker.css"

const ColorPicker = ({ onChange }) => {

  return <ReactGPicker value='blue' format='hex' onChange={value => onChange(value)} />;

}

export default ColorPicker