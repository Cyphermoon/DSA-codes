def reverse_string(input):
    if input == "":
        return ""
    
    return reverse_string(input[1:]) + input[0]

print("Reversed String: ", reverse_string("Kelvin"))