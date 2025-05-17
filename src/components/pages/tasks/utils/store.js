const data = {
    lists: {
      "list-1": {
        id: "list-1",
        title: "To Do",
        cards: [],
      },
      "list-2": {
        id: "list-2",
        title: "Doing",
        cards: [],
      },
      "list-3": {
        id: "list-3",
        title: "Done",
        cards: [],
      },
      // "list-4": {
      //   id: "list-4",
      //   title: "Done",
      //   cards: [],
      // },
    },
    listIds: ["list-1", "list-2", "list-3"],
    members: ["David" , "Carlos" , "Mateo" , "Rick" , "Martin" , "Cristiano"],
    tags: [
      {
        id: 1,
        name: 'Easy',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Normal',
        isSelected: false,
      },
      {
        id: 3,
        name: 'Hard',
        isSelected: false,
      },
      {
        id: 4,
        name: 'Jet',
        isSelected: false,
      }
    ]
  };
  
  export default data;