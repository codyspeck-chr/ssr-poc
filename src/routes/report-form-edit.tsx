import { Outlet, useParams } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ReportForm } from '../models';

const EditReportForm = () => {
  const { id } = useParams(); // use id to fetch report from API
  
  const form = useForm<ReportForm>({
    // populate the default values in the report with data from API
    defaultValues: {
      name: `Report Name ${id}`,
      description: `Report Description ${id}`
    }
  });

  // Handler for saving an existing report
  const onSubmit: SubmitHandler<ReportForm> = (form: any) => {
    console.log('Saving Report');
    console.log(form);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Outlet/>
      </form>
    </FormProvider>
  );
};

export default EditReportForm;
