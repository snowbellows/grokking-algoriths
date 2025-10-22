def binary_search(arr, search):
    if len(arr) == 1:
        if arr[0] == search:
            return arr[0]
        else:
            return None
    low = 0
    high = len(arr)
    mid = (low + high) // 2

    guess = arr[mid]

    if guess == search:
        return guess
    else:
        if guess > search:
            high = mid
        else:
            low = mid

        return binary_search(arr[low:high], search)


my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3))
print(binary_search(my_list, -1))
