import * as yup from 'yup';

export const itemFormSchema = yup.object().shape({
    item: yup.string().required('Item is required')
});
export const listFormSchema = yup.object().shape({
    listName: yup.string().required('List name is required'),
    listDetails: yup.string().min(5, 'Must be more then  5 signs')

});