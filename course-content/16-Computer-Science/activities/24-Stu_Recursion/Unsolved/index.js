// TODO: Add a comment describing what the `position` parameter means for this function.
// this is the fibonacci position, or up to point that we want return.
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // the position is less than 2 (i.e. 1 or 0, we will return the original given parameter)
  console.log(position);
  if (position < 2) {
    return position;
  }
  // TODO: Add a comment describing the purpose of this return statement.
  // In here
  return fibonacci(position - 1) + fibonacci(position - 2);
};


// TODO: What will this return?
console.log(fibonacci(5));

