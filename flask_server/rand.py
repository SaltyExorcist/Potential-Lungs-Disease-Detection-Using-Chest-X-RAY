import random

# List of sample names
names = ["John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Ava", "Benjamin", "Isabella"]

# Generate random name
def generate_name():
    return random.choice(names)

# Generate random weight in kilograms
def generate_weight():
    return random.uniform(40, 120)

# Generate random height in centimeters
def generate_height():
    return random.uniform(150, 200)

# Generate random name, weight, and height
def generate_person():
    name = generate_name()
    weight = generate_weight()
    height = generate_height()
    return name, weight, height

# Generate 10 random persons
for _ in range(10):
    name, weight, height = generate_person()
    print("Name:", name)
    print("Weight:", weight, "kg")
    print("Height:", height, "cm")
    print("------------")