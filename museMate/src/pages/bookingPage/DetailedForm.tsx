import React from 'react';
import { Formik, Field, Form, FormikHelpers,FormikProps,withFormik } from 'formik';
import * as  yup from 'yup';


const personSchema=yup.object().shape({
    firstName: yup.string().required(),
  lastName: yup.string(),
  email:yup.string().email('Invalid email').required('Required'),
  phone: yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .required('A phone number is required'),
  email:yup.string().email('Invalid email').required('Required'),
})
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone:string
}



const InnerForm = (props: FormikProps<Values>) => {
    const { touched, errors, isSubmitting } = props;
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Signup</h1>
      
        
        <Form className="space-y-4" noValidate>
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1">
              First Name
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="John"
              type="text"
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1">
              Last Name
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Doe"
              type="text"
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
              className="border p-2 rounded"
            />
            {touched.email && errors.email && <div  className="text-red-500 text-sm">{errors.email}</div>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="PhoneNo" className="mb-1">
              Phone No
            </label>
            <Field
              id="phone"
              name="phone"
              placeholder="075**"
              type="text"
              className="border p-2 rounded"
            />
            {touched.phone && errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="studio" className="mb-1">
              Studio Type
            </label>
            <Field as="select" name="studio" className="border p-3 rounded">
             <option value="RecordEase">RecordEase</option>
             <option value="JamJive Lounge">JamJive Lounge</option>
             <option value="RhythmRoost">RhythmRoost</option>
           </Field>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Date" className="mb-1">
              Booking Date
            </label>
            <Field
              id="Date"
              name="Date"
              type="date"
              className="border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
    
      
    </div>
  );
};

interface MyFormProps {
    initialEmail?: string;
     // if this passed all the way through you might do this or make a union type
  }
  
  // Wrap our form with the withFormik HoC
  const MyForm = withFormik<MyFormProps, Values>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        firstName: '',
        lastName: ' ',
        email: ''
        
      };
    },
  
    // Add a custom validation function (this can be async too!)
    validationSchema:personSchema,
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    }
    
  })(InnerForm);
  
  // Use <MyForm /> wherevs
  const DetailedForm = () => (
    <div>
     
      <MyForm  />
    </div>
  );
  
  export default DetailedForm;


