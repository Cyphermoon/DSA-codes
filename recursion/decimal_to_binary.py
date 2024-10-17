def convert_decimal_to_binary(input):
    if input <= 1:
        return input
    
    quotient = input // 2
    remainder = str(input % 2)

    return str(convert_decimal_to_binary(quotient)) + remainder


def convert_decimal_to_binary(input, result=""):
    if input == 0:
        return result
    
    result = str(input % 2) + result
    return convert_decimal_to_binary(input // 2, result)


print("Binary: ", convert_decimal_to_binary(3))