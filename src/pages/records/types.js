export const types = [
  {
    value: 0,
    title: "Ăn uống",
  },
  {
    value: 1,
    title: "Ăn",
  },
  {
    value: 2,
    title: "Uống",
  },
  {
    value: 3,
    title: "Di chuyển", 
  },
  {
    value: 4,
    title: "Gửi xe",
  }, {
    value: 5,
    title: "Grab/Taxi",
  },
  {
    value: 6,
    title: "Mua sắm",
  },
  {
    value: 7,
    title: "Quần áo",
  }, {
    value: 8,
    title: "Giày, dép",
  }, {
    value: 9,
    title: "Phụ",
  },
  {
    value: 10,
    title: "Cho",
  }, {
    value: 11,
    title: "Chi",
  }
];

export const treeData = [
  {
    ...types[0],
    children: [types[1], types[2]],
  }, {
    ...types[3],
    children: [types[4], types[5]],
  }, {
    ...types[6],
    children: [types[7], types[8]],
  }, {
    ...types[9],
    children: [types[10], types[11]],
  }, 
];

