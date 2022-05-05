import { useFormContext } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

const Editor = () => {
  const { register } = useFormContext();
  const { id } = useParams();
  
  return (
    <>
      <div>
        <Link to="/">Return Home</Link>
      </div>
      <br/>
      <div>Editor</div>
      <Link to={id ? `/edit/${id}/builder` : '/create/builder'}>
        Builder
      </Link>
      <div>
        <input {...register('name')} />
      </div>
      <button type="submit">Save</button>
    </>
  );
};

export default Editor;
