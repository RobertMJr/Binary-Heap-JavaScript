# Binary Heap [![](https://img.shields.io/badge/Robert-Muraru-blue)](https://robert-muraru-portfolio.herokuapp.com/)


## Description
A binary heap is a heap data structure that takes the form of a binary tree.

### [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap)
A binary heap is defined as a binary tree with two additional constraints:

- Shape property: a binary heap is a complete binary tree; that is, all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.

- Heap property: the key stored in each node is either greater than or equal to (≥) or less than or equal to (≤) the keys in the node's children, according to some total order.

Heaps where the parent key is greater than or equal to (≥) the child keys are called __max-heaps__, those where it is less than or equal to (≤) are called __min-heaps__;

#### Big O of Binary Heaps:

- Insertion: __O(log N)__
- Removal: __O(log N)__
- Search: __O(N)__