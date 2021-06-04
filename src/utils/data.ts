export const getID = () => Math.floor(Math.random() * 170000);

export const dummydata = [
  {
    name: 'this is my first cv',
    status: 'sent',
    id: getID(),
  },
  {
    name: 'this is second cv',
    status: 'sent',
    id: getID(),
  },
  {
    name: 'my first cv',
    status: 'confirmed',
    id: getID(),
  },
];
