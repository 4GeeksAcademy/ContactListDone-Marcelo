export const initialStore = () => {
  return {

    contacts: [],
    userRole: ""
  };
};

export default function storeReducer(store, action = {}) {

  switch (action.type) {

    case 'setContacts':

      return {
        ...store,
        contacts: action.payload
      };

    case "addContact":
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };


    case "editContact":
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };

    case "deleteContact":
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };


    default:
      return store;
  }
}