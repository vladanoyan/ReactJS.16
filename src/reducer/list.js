const arr = [
  {
    text: "Hellow World",
    id: 1
  },
  {
    text: "Hellow World",
    id: 2
  },
  {
    text: "Hellow World",
    id: 3
  }
];
const list = (state = arr, action) => {
  switch (action.type) {
    case 'LIST':
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default list;