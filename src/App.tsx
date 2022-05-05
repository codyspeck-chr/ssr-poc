import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes';
import Builder from './routes/builder';
import Editor from './routes/editor';
import CreateReportForm from './routes/report-form-create';
import EditReportForm from './routes/report-form-edit';

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Just to demonstrate we can have other routes */}
      <Route index element={<Home/>} />

      {/* Create new report paths */}
      <Route path="/create" element={<CreateReportForm/>}>
        <Route path="editor" element={<Editor/>} />
        <Route path="builder" element={<Builder/>} />
      </Route>

      {/* Edit existing report paths */}
      <Route path="/edit/:id" element={<EditReportForm/>}>
        <Route path="editor" element={<Editor/>} />
        <Route path="builder" element={<Builder/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
