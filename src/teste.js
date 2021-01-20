const listUser = new ListUser();
const listUserTemplate = listUser.display({
  users: [
    {
      mail: "ahmed@gmail.com",
      name: "ahmed"
    },
    {
      mail: "sami@gmail.com",
      name: "sami"
    },
    {
      mail: "khaled@gmail.com",
      name: "khaled"
    }
  ]
});
