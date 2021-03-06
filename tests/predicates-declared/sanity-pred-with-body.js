// @flow

// Sanity check:
// - predicate functions cannot have bodies (can only be declarations)

function pred(x: mixed): $StrP<0> { // error: cannot use pred type here
  return typeof x === "string";
}

function foo(x: string | Array<string>): string {

  if (pred(x)) {
    return x;
  }

  return "1"
}
