# myList = [3, 8, 2, 5, 7, 6, 12]
# target = 20

# myList.sort()   # required

# left = 0
# right = len(myList) - 1

# while left < right:
#     curr_sum = myList[left] + myList[right]

#     if curr_sum == target:
#         print( myList[left],"+", myList[right],"=" ,target)
#         break
#     elif curr_sum < target:
#         left += 1
#     else:
#         right -= 1
# myList = [3, 8, 2, 5, 7, 6, 12]
# w=4
# maxx = 0
# for i  in range(len(myList)-w+1):
#   current = 0
#   for j in range(i,i+w):
#     current += myList[j]
#   maxx = max(current, maxx)

# print(maxx)

# myList = [3, 8, 2, 5, 7, 6, 12]
# w=4
# current = 0
# for i in range(w):
#   current += myList[i]
# maxx = current
# i =1
# while(i <= len(myList)-w):
#   current =current - myList[i-1] + myList[i+w-1]
#   if(current>maxx):
#     maxx=current
#   i+=1

# print(maxx)

# list1 = [2, 4, 3, 2, 6, 4, 7]

# for i in range(len(list1)):
#     j = i+1

#     while j < len(list1):
#         if list1[i] == list1[j]:
#             list1.pop(j)
#         else:
#             j += 1

    


# print(list1)

# def binary_search(arr, item):
#     arr.sort()
#     b = 0
#     e= len(arr)-1
#     while (b<=e):
#       mid = (b+e)//2
#       if (arr[mid] == item):
#         return mid
#       elif(arr[mid]<item):
#         b= mid+11
#       else: 
#         e= mid-1
#     return -1   
# list1 = [22, 34, 43, 32, 25, 64, 37]
# item = 25
# index = binary_search(list1, item)
# if index != -1:
#   print(f"Element {item} found at index {index}")
# else:
#   print(f"Element {item} not found")

# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None


# def traverse(head):
#     current = head

#     while current is not None:
#         print(current.data, end=" ")
#         current = current.next


# # example usage
# head = Node(10)
# second = Node(20)
# third = Node(30)

# head.next = third
# third.next = second

# traverse(head)

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # Traversal
    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    # Insert at start
    def insert_at_start(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # Insert at end
    def insert_at_end(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    # Insert at position (middle)
    def insert_at_position(self, data, position):
        if position == 0:
            self.insert_at_start(data)
            return
        new_node = Node(data)
        temp = self.head
        for i in range(position - 1):
            if not temp:
                raise IndexError("Position out of bounds")
            temp = temp.next
        new_node.next = temp.next
        temp.next = new_node

    # Delete at start
    def delete_at_start(self):
        if self.head:
            self.head = self.head.next

    # Delete at end
    def delete_at_end(self):
        if not self.head:
            return
        if not self.head.next:
            self.head = None
            return
        temp = self.head
        while temp.next.next:
            temp = temp.next
        temp.next = None

    # Delete at position (middle)
    def delete_at_position(self, position):
        if position == 0:
            self.delete_at_start()
            return
        temp = self.head
        for i in range(position - 1):
            if not temp or not temp.next:
                raise IndexError("Position out of bounds")
            temp = temp.next
        temp.next = temp.next.next

# Example Usage
ll = LinkedList()
ll.insert_at_end(10)
ll.insert_at_end(20)
ll.insert_at_end(30)
ll.insert_at_start(5)
ll.insert_at_position(15, 2)
ll.traverse()          # 5 -> 10 -> 15 -> 20 -> 30 -> None
ll.delete_at_start()
ll.delete_at_end()
ll.delete_at_position(1)
ll.traverse()          # 10 -> 20 -> None





