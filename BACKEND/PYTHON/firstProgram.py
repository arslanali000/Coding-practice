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
# class Complex:
#   def __init__(self,real, img):
#     self.real = real
#     self.img = img
#   def showNumber(self):
#     print(self.real, "i +", self.img,"j")
#   def __add__(self, num2):
#     newReal =self.real + num2.real
#     newImg =self.img + num2.img
#     return Complex(newReal, newImg)
#   def __sub__(self, num2):
#     newReal =self.real - num2.real
#     newImg =self.img - num2.img
#     return Complex(newReal, newImg) 
#   def __mod__(self, num2):
#     newReal =self.real % num2.real
#     newImg =self.img % num2.img
#     return Complex(newReal, newImg)  

# num1 =Complex(1,3)
# num1.showNumber()

# num2 =Complex(5,9)
# num2.showNumber()

# num3 = num1 % num2
# num3.showNumber()
import random
import string
# target= random.randint(1,100)
# # print(target)

# while True:
#   n= input("Enter a Number or Quit(Q): ")
#   if(n== "Q" or "q"):
#     break
#   n= int(n)
#   if(n<target):
#     print("This number is Less than target")
#   elif(n>target):
#     print("This number is Greater than target")
#   else:
#     print("Congrats! You have choosed the correct Number")
#     break

# print("---Game Over!---") 
pass_len = 8
charVal = string.ascii_letters + string.digits + string.punctuation 
passWord = ""
for i in range(pass_len):
 passWord += random.choice(charVal)
print(passWord) 