import EnquiryForm from './EnquiryForm';

export const Empty = {
  component: EnquiryForm,
  props: {
    formId: 'EnquiryFormExample',
    listingTitle: 'Sauna with a view',  // TODO
    authorDisplayName: 'Janne',
    onSubmit (values) {
      console.log('submit with values:', values);
    },
  },
  group: 'forms',
};
