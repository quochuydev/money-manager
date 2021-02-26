export const types = [
  {
    id: 1,
    name: "Ăn uống",
    parentId: null,
  },
  {
    id: 2,
    name: "Ăn",
    parentId: 1,
  },
  {
    id: 3,
    name: "Uống",
    parentId: 1,
  },
];

export const treeData = [
  {
    value: 1,
    title: "Ăn uống",
    children: [{
      value: 2,
      title: "Ăn",
    }, {
      value: 3,
      title: "Uống",
    }],
  }, {
    value: 4,
    title: "Di chuyển",
    children: [{
      value: 5,
      title: "Gửi xe",
    }, {
      value: 6,
      title: "Grab/Taxi",
    }], 
  }, {
    value: 7,
    title: "Mua sắm",
    children: [{
      value: 7,
      title: "Quần áo",
    }, {
      value: 9,
      title: "Giày, dép",
    }], 
  }, {
    value: 10,
    title: "Phụ",
    children: [{
      value: 11,
      title: "Cho",
    }, {
      value: 12,
      title: "Chi",
    }], 
  }
];

