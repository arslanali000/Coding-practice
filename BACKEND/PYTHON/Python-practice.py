# a=2+3j
# b= 3+5j
# c = a+b
# print(c)
# print(int(c.real))
# print(int(c.imag))
# print(type(c))

# n = 9.7
# c = int(n)
# s =int("42")
# print(c)
# print(type(s))

# fruit =["mango", "apple","cherry"]
# print(fruit)
# fruit.append("banana")
# print(fruit)
# fruit.remove("mango")
# print(fruit)

# nums =[10,20,30,40,50]
# print(nums[0])
# print(nums[-1])
# print(nums[1:4])
# print(nums[-4:-1])
# sum =0
# for num in nums:
#   sum = sum +num
# print(sum)
# largest = max(nums)
# print(largest)

# reversed_nums = nums[::-1]
# print(reversed_nums)

# cities = ("gujrat", "lahore","karachi","islamabad", "sialkot")
# print(len(cities))
# print(cities[1])
# print(cities.index("lahore"))
# cities= list(cities)
# cities[2]= "pindi"
# print(cities)
# cities = tuple(cities)
# print(type(cities))

# nums =(10,20,30)

# num1 = nums[0]
# print(num1)
# num2 = nums[1]
# print(num2)
# num3 = nums[2]
# print(num3)

# std= {
#   "Ali": 87,
#   "Ahmad": 79,
#   "Arslan": 96
# }
# print(std.keys())
# print(std.values())
# print(std["Ahmad"])
# std["Hamza"] = 88
# print(std)
# std["Ali"] = 69
# print(std)
# del std["Ahmad"]
# print(std)

# for name, marks in std.items():
#   print(f"student: {name}, Marks:{marks}")

# def greet(name):
#   print("Hello",name)

# greet("Ali")

# def calcArea(len,wid):
#   return 0.5*len*wid

# area=calcArea(4,5)
# print(area)

# def isEven(n):
#   if(n%2==0):
#     return True
#   else:
#     return False
  
# print(isEven(9))

# def power(base,exp= 2):
#   return base**exp

# print(power(7))

# n = int(input("Enter Number"))
# while(n!=0):
#   n = int(input("Enter number Again"))
# print("stopped")

# nums =[11,20,33,40,50]
# for num in nums:
#   if(num%2==0):
#     print(num)

# n = 4
# f= 1
# for i in range(1,n+1):
#   f*=i
# print(f)

# n = int(input("Enter Number"))
# i =1
# while i<=10:
#   print(n*i)
#   i+=1

# a = "Hello. World!" 
# print(a.split("l"))  

# import random 
# name=random.choice(["Ameer","Ali","Ahmad"]) 
# print("Who will pay the bill?", name) 

# x = abs(-54.3)

# print(x)

# def myFun(*args):
#   print("Type:", type(args)) 
#   print("First argument:", args[0]) 
#   print("Second argument:", args[1]) 
#   print("All arguments:", args) 
  

# x= myFun(4,6,5,3)

# print(x)

# def my_function(**myvar): 
#   print("Type:", type(myvar)) 
#   print("Name:", myvar["name"]) 
#   print("Age:", myvar["age"]) 
#   print("All data:", myvar) 
  
# my_function(name = "Tobias", age = 30, city = "Bergen") 

# b = "Hello, World!"
# print(b[-6:])

import random

print(random.choice(["Ali","Hamza","Arslan"]))


