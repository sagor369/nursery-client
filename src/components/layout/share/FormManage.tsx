import { ReactElement, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
};
const FormManage = ({ children, submitHandler }: FormProps) => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const onSubmit = (e:any) => {
    submitHandler(e)
    reset()
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full">
        {children}
      </form>
    </FormProvider>
  );
};

export default FormManage;
