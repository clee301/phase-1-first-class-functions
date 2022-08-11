function receivesAFunction(a) {
  return a();
}

function returnsANamedFunction() {
  return function hello() {
    return "Nothing";
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    return "Something";
  };
}
