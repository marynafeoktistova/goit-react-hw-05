import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <ClipLoader color='#36d7b7' size={50} />
    </div>
  );
};

export default Loader;
