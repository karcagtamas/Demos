# Modules

# Core modules
import datetime
from datetime import date
import time

# Custom module
import validator
from validator import validate_email

# Pip modules
from camelcase import CamelCase

# today = datetime.date.today()
today = date.today()
timestamp = time.time()

print(today)
print(timestamp)

c = CamelCase()
print(c.hump('hello there world'))

email = "test@test.com"

if validate_email(email):
    print('Email is valid')
else:
    print('Email is bad')
