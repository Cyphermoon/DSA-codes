def check_palindrome(word):
    is_palindrome = False

    if len(word) == 0 or len(word) == 1:
        return True
    
    start_pointer = 0
    end_pointer = len(word) - 1

    if word[start_pointer] == word[end_pointer]:
        is_palindrome = check_palindrome(word[start_pointer + 1:end_pointer])
    
    return is_palindrome


print("Palindrome: ", check_palindrome("kayak"))