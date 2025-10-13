# infinite recursion until maximum call stack size exceeded
def countdown(i):
    print(i)
    countdown(i - 1)


countdown(3)
