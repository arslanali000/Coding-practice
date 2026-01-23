# def calc_avg(a=2,b=4,c):
#   avg= (a+b+c)/3
#   return avg

# average= calc_avg(a,b ,3)
# print(average)

# cities = ["lahore", "Gujrat","isl"]
# n=  int(input("Enter Number: "))

# def even_odd(n):
#   if(n%2== 0):
#     print("Even")
#   else:
#     print("Odd")

# even_odd(7)


# def print_list(list, idx=0):
#  if(idx == len(list)):
#    return
#  print(list[idx])
#  print_list(list, idx+1)

# nums= [1,2,3,5,34,631,12] 
# print_list(nums)


# nums = ["apple", "Mango",[1,2,3]]
# for item in nums:
#   print(item)
# for item in nums[2]:
#   print(item)

# count = 0
# with open("practice.txt","r") as f:
#      data = f.read()
#      nums = data.split(",")
#      for val in nums:
#        if(int(val) %2 ==0):
#          count+=1
        
# print(count)

# class Student:
#   clg_name= "Zamindar"
#   def __init__(self, fullName, rollNumber):
#     self.name = fullName
#     self.rollNumber = rollNumber
#     print("adding new student")
#   def welcome(self):
#     print("welcome", self.name)


# s1 = Student("Ali", 2500)
# print(s1.name, s1.rollNumber)

# s2 = Student("Arslan", 2500)
# print(s2.name, s2.rollNumber, s2.clg_name)
# s2.welcome()
class Student:
  def __init__(self,name,marks):
    self.name = name
    self.marks = marks
  def avgMarks(self):
    sum = 0
    for val in self.marks:
      sum+=val
    print(sum/3)


s1 = Student("Arslan",[23,40,32])
s1.avgMarks()