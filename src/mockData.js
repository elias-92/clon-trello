const mockData = {
  lists: {
    '01list': {
      id: '01list',
      title: 'To do',
      cards: [
        {
          id: '01card',
          title: 'Buy milk'
        },
        {
          id: '02card',
          title: 'Buy cokies'
        },
        {
          id: '03card',
          title: 'Buy sugar'
        }
      ]
    },
    '02list': {
      id: '02list',
      title: 'In progress',
      cards: []
    }
  },
  listIds: ['01list', '02list']
}

export default mockData
