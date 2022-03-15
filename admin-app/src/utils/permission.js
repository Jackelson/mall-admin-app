const roleRouter = {
  coustomer: [
    {
      name: 'Product',
    },
    {
      name: 'Add',
    },
    {
      name: 'List',
    },
    {
      name: 'ProductEdit',
    },
  ],
  admin: [
    {
      name: 'Product',
    },
    {
      name: 'Add',
    },
    {
      name: 'List',
    },
    {
      name: 'Category',
    }, {
      name: 'ProductEdit',
    },
  ],
};
export default function (role, routers) {
  const routerName = roleRouter[role].map((item) => item.name);
  const resultRouter = routers.filter((a) => {
    if (routerName.indexOf(a.name) !== -1) {
      const { children } = a;
      a.children = children.filter((b) => {
        if (routerName.indexOf(b.name) !== -1) {
          return true;
        }
      });
      return true;
    }
    return false;
  });
  return resultRouter;
}
