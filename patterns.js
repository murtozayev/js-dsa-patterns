// Proxy pattern ___________________________________________________________________________________________________________
const user = {
  name: "Jahongir",
  age: 19,
};

const proxy = new Proxy(user, {
  get(target, prop) {
    if (prop === "name") {
      throw new Error("Cannot get name");
    }

    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    return target;
  },
});
// Proxy pattern ___________________________________________________________________________________________________________
