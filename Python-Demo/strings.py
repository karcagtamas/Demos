name = "Tamas"
age = 20

# Concatenate
print("Hello. my name is " + name + " and I am " + str(age))

# Format
# Arguments by position
print("My name is {name} and I am {age}".format(name=name, age=age))

# F-strings
print(f"Hello, my name is {name} and I am {age}")

# String methods
s = "hello world"

# Capitalize
print(s.capitalize())

# Uppercase
print(s.upper())

# Lowercase
print(s.lower())

# Swap case
print(s.swapcase())

# Get length
print(len(s))

# Replace
print(s.replace('world', 'everyone'))

# Count
print(s.count('h'))

# Starts with
print(s.startswith('hello'))

# Ends with
print(s.endswith('d'))

# Split into a list
print(s.split())

# Find
print(s.find('r'))

# Is all alphanumeric
print(s.isalnum())

# Is all alphabetic
print(s.isalpha())

# Is all numeric
print(s.isnumeric())
