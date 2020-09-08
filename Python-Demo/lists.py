# Create
numbers = [1, 2, 3, 4, 5]
fruits = ['Apples', 'Oranges', 'Grapes', 'Pears']

# Use a constructor
numbers2 = list((1, 2, 3, 4, 5))

print(numbers, numbers2)

# Get a value
print(fruits[1])

# Get the length
print(len(fruits))

# Change value
fruits[0] = 'Bananas'

# Append
fruits.append('Mangos')
print(fruits)

# Insert
fruits.insert(2, 'Strawberries')

# Remove
fruits.remove('Mangos')
fruits.pop(2)

# Reverse
fruits.reverse()

# Sorts
fruits.sort()

# Reverse sort
fruits.sort(reverse=True)

print(fruits)
