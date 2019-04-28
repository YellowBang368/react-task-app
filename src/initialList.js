const initialList = {
  items: {
    'item-1': { id: 'item-1', content: 'To go grocery shopping', active: true },
    'item-2': { id: 'item-2', content: 'To mow the lown', active: true },
    'item-3': { id: 'item-3', content: 'Christmas tree', active: true },
    'item-4': { id: 'item-4', content: 'Apples', active: true },
    'item-5': { id: 'item-5', content: 'Gifts for children', active: true },
  },
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'To do',
      items: ['item-1', 'item-2'],
    },
  },
  listOrder: ['list-1'],
}

export default initialList;
