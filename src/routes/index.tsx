import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div>Home</div>
    <div>
      <Link to="/create/editor">Create New Report</Link>
    </div>
    <div>
      <Link to="/edit/123/editor">Edit Existing Report</Link>
    </div>
  </>
);

export default Home;
