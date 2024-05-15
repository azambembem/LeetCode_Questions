var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

console.log(mergeTwoLists((list = [1, 2, 4]), (list2 = [1, 3, 4])));
console.log(mergeTwoLists((list1 = []), (list2 = [])));
console.log(mergeTwoLists((list1 = []), (list2 = [0])));
