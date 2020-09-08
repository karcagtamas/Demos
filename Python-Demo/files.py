# Files

# Open

myFile = open('myFile.txt', 'w')

# Get some info
print('Name: ', myFile.name)
print('Is closed: ', myFile.closed)
print('Opening mode: ',  myFile.mode)

# Write
myFile.write('I love Python')
myFile.write(' and JavaScript')
myFile.close()

# Append
myFile = open('myFile.txt', 'a')
myFile.write(' I also like PHP')
myFile.close()

# Read
myFile = open('myFile.txt', 'r+')
text = myFile.read()
print(text)
