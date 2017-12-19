## Sort!

All you need to focus on is writing two sorting algorithms. One in ```sorts/insertionSort.js``` and the other in ```sorts/selectionSort.js```.

## [Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)
  - for every item in the collection
  - find the smallest item in the unsorted portion of the array and swap it with the current item

## [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
  - for every item in the collection
  - check if the previous item is greater than the current item
  - if greater, the current item is not in place: swap it with the previous item and repeat

Open ```index.html``` to see your sorting algorithm played back to you visually in the browser:
  - A red flash indicates that an array element has been *written*
  - A green flash indicates that an array element has been *read*

#### Here is how your solution may look:
![Alt Text](./assets/example-solution.gif)


### Deliverables
  - Write insertion and selection sort in the ```./src``` directory
  - Discuss an explanation for the different speeds of the sorts
  - Understanding that one visual action (either a read or write) is occurring for each array every unit of time (e.g. they have always completed the same amount of actions at any given point), discuss what this is an accurate, and inaccurate, time representation of.
  - Provide an explanation for how both changes in array sizes as well as changes in how scrambled the arrays are would affect performance for the sorting algorithms


### Tips
  - Feel free to alter the size of the arrays and duration of the steps in config.js
