# Tuple - Unchangeable

# Create tuple
fruits = ('Apples', 'Oranges', 'Grapes')
fruits2 = tuple(('Apples', 'Oranges', 'Grapes'))

print(fruits, fruits2)

# Weird string
fruits3 = ('Apples')
print(fruits3, type(fruits3))

# Get value
print(fruits[1])

# Can't change value
# fruits[0] = 'asd'

# Delete
del fruits2
# print(fruits2)

# Length
print(len(fruits))


# Sets

# Create
fruits_set = {'Apples', 'Oranges', 'Magos'}

# Check if in set
print('Apples' in fruits_set)

# Add
fruits_set.add('Grapes')

# Remove
fruits_set.remove('Grapes')

# Clear set
fruits_set.clear()

# Delete
# del fruits_set because of it is cleared

# Add duplicate - does not happening multiple adding
fruits_set.add('Apples')
fruits_set.add('Apples')


print(fruits_set)
