## Sort!

All you need to focus on is writing two sorting algorithms. One in ```sorts/insertionSort.js``` and the other in ```sorts/selectionSort.js```.

## Selection Sort

  See this link: (https://en.wikipedia.org/wiki/Selection_sort)
  1. for every item in the collection
  2. find the smallest item in the unsorted portion of the array and swap it with the current item

## Insertion Sort

  See this link: https://en.wikipedia.org/wiki/Insertion_sort
  1. for every item in the collection 
  2. check if the previous item is greater than the current item
  3. if greater, the current item is not in place: swap it with the previous item
  4. repeat this process until the item is in the proper place
  5. only then move on to the next item in the collection

Open ```index.html``` to see your sorting algorithm played back to you visually in the browser:
  - A red flash indicates that an array element has been *written*
  - A green flash indicates that an array element has been *read*

#### Here is how your solution may look:

![Example Solution](https://curriculum-content.s3.amazonaws.com/react/example-solution-minified.gif)


### Deliverables

  - Write insertion and selection sort in the ```./src``` directory
  - Discuss an explanation for the different speeds of the sorts
  - Understanding that one visual action (either a read or write) is occurring for each array every unit of time (e.g. they have always completed the same amount of actions at any given point), discuss what this is an accurate, and inaccurate, time representation of.
  - Provide an explanation for how both changes in array sizes as well as changes in how scrambled the arrays are would affect performance for the sorting algorithms


### Tips

  - Feel free to alter the size of the arrays and duration of the steps in config.js
