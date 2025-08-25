import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import Btn from './Btn';

const ActionBtns = ({ handleDelete, handleEdit, item }) => {
  return (
    <>
      <Btn
        onClick={() => handleDelete(item)}
        className="text-xl text-white p-2 bg-red-500 hover:bg-red-600 ml-2 rounded-lg"
      >
        <MdDeleteForever />
      </Btn>
      <Btn
        onClick={() => handleEdit(item)}
        className="text-xl text-white p-2 bg-blue-500 hover:bg-blue-600 ml-2 rounded-lg"
      >
        <FiEdit3 />
      </Btn>
    </>
  );
};

export default ActionBtns;
