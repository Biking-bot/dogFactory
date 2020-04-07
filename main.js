// Write your code here:
function dogFactory(name, breed, weight) {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
      get breed() {
        return this._breed;
      },
        get weight() {
          return this._weight;
        },
          set name(name) {
            return this._name = name;
          },
            set breed(breed) {
              return this._breed = breed;
            },
              set weight(weight) {
                return this._weight = weight;
              },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      return this._weight++;
    }
  
  }
}