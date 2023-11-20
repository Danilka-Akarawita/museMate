import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const DetailedForm = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="space-y-4">
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
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default DetailedForm;
