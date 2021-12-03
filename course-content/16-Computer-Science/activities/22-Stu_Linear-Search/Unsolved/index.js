const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    var found = false;
    console.log(array);
    function linearIterate() {
        for (var i = 0; i < array.length; i++) {
            if (array.value === element) {
                return found = array[i];
            }
        }
    }
    linearIterate();

    if (!found) {
        return -1;
    } else {
        return found;
    }
};
linearSearch();

module.exports = linearSearch;