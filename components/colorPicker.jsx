import ReactGPicker from 'react-gcolor-picker';


const ColorPicker = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return <ReactGPicker value='red' onChange={onChange} />;

}

export default ColorPicker