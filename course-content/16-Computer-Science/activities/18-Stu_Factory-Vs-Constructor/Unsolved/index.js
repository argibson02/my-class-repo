// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Unit 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();


const information = (state) => ({
  info: () => console.log(state.title, state.description),
});

const lesson = (title, description) => {
  const state = {
    title: title,
    description: description,
  };

  return { ...information(state) };
}

const science = lesson('cells', 'There are many power houses');
science.info();

