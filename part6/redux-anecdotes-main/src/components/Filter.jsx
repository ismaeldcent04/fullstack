import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../reducers/filterReducer';
import Notification from './Notification';

const Filter = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterChange(e.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <>
      <h2>Anecdotes</h2>
      {notification !== null && <Notification />}
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    </>
  );
};

export default Filter;
