def find_max(arr):
    def find_max_inner(arr, max_num):
        if len(arr) == 1:
            if arr[0] > max_num:
                return arr[0]
            else:
                return max_num
        else:
            new_max = max_num
            if arr[0] > max_num:
                new_max = arr[0]
            return find_max_inner(arr[1:], new_max)

    return find_max_inner(arr, 0)


print(find_max([4, 1, 3, 5, 2]))
