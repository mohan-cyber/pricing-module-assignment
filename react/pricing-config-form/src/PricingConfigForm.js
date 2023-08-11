import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PricingConfigForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    day_of_week: Yup.string().required('Day of the week is required.'),
    distance_base_price: Yup.number().required('Distance base price is required.'),
    distance_additional_price: Yup.number().required('Distance additional price is required.'),
    time_multiplier_factor: Yup.number().required('Time multiplier factor is required.'),
    waiting_charges: Yup.number().required('Waiting charges are required.'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div  className='flex p-2'>
          <label className='p-2' htmlFor="day_of_week">Day of the Week</label>
          <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="day_of_week" />
          <ErrorMessage name="day_of_week" component="div" />
        </div>
        <div className='flex p-2'>
          <label className='p-2' htmlFor="distance_base_price">Distance Base Price</label>
          <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" name="distance_base_price" />
          <ErrorMessage name="distance_base_price" component="div" />
        </div>
        <div className='flex p-2'>
          <label className='p-2' htmlFor="distance_additional_price">Distance Additional Price</label>
          <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" name="distance_additional_price" />
          <ErrorMessage name="distance_additional_price" component="div" />
        </div>
        <div className='flex p-2'>
          <label className='p-2' htmlFor="time_multiplier_factor">Time Multiplier Factor</label>
          <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" name="time_multiplier_factor" />
          <ErrorMessage name="time_multiplier_factor" component="div" />
        </div>
        <div className='flex p-2'>
          <label className='p-2' htmlFor="waiting_charges">Waiting Charges</label>
          <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" name="waiting_charges" />
          <ErrorMessage name="waiting_charges" component="div" />
        </div>
        <button  type='submit' className="flex mx-auto mt-4 bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l">
                submit
              </button>
      </Form>
    </Formik>
  );
};

export default PricingConfigForm;
