import ReactGPicker from 'react-gcolor-picker';
import "@/css/colorPicker.css"

const ColorPicker = ({ onChange, color }) => {

  return <ReactGPicker value={color || 'sky'} format='hex' onChange={value => onChange(value)} />;

}

export default ColorPicker