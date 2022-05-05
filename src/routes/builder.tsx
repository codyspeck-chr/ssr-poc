import { useFormContext } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

const Builder = () => {
  const { register } = useFormContext();
  const { id } = useParams();
  
  return (
    <>
      <div>
        <Link to="/">Return Home</Link>
      </div>
      <br/>
      <div>Builder</div>
      <Link to={id ? `/edit/${id}/editor` : '/create/editor'}>
        Editor
      </Link>
      <div>
        <input {...register('description')} />
      </div>
    </>
  );
};

export default Builder;
