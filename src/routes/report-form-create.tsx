import { Outlet, useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ReportForm } from '../models';

const CreateReportForm = () => {
  const form = useForm<ReportForm>();
  const navigate = useNavigate();
  
  // Handler for creating a new report
  const onSubmit: SubmitHandler<ReportForm> = (form: any) => {
    console.log('Creating Report');
    console.log(form);
    
    // Navigate to the url for the newly created report
    // Could even pre-populate `useQuery` cache so we don't
    // need to re-fetch the report data from the server 
    navigate(`/edit/12345/editor`);
  };
  
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Outlet/>
      </form>
    </FormProvider> 
  );
};

export default CreateReportForm;
