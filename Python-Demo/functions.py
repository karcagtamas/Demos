# Functions

# Create


def sayHello(name="Sam"):
    print(f"Hello {name}")


sayHello("John Doe")
sayHello()

# Return


def getSum(num1, num2):
    total = num1 + num2
    return total


num = getSum(10, 2)
print(num)

# Lamda functions
# getSum = lambda num1, num2 : num1 + num2

print(getSum(10, 3))
