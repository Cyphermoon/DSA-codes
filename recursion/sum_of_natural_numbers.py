def sum_natural_number(input):
    if input <= 1:
        return input
    
    return sum_natural_number(input -1) + input


print("sum of natural number: ", sum_natural_number(10))