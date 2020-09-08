# Loops

people = ['John', 'Paul', 'Sara', 'Susan']

# For
for person in people:
    print(f'Current person: {person}')

# Break
for person in people:
    if person == 'Sara':
        break
    print(f'Current person: {person}')

# Continue
for person in people:
    if person == 'Sara':
        continue
    print(f'Current person: {person}')

# Range
for i in range(len(people)):
    print(people[i])

for i in range(0, 11):
    print(f'Number: {i}')

# While

count = 0
while count <= 10:
    print(f'Count: {count}')
    count += 1
