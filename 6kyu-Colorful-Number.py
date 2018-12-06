def colorful(number):
    arr = []
    s = str(number)
    length = len(s)

    for l in range(1, length + 1):
        i = 0
        while ((i + l) <= length):
            substr = s[i:i+l]
            if len(substr) == 1:
                arr.append(int(substr))
            else:
                arr.append(reduce(lambda x, y: int(x) * int(y), list(substr)))
            i += 1
    return len(arr) == len(set(arr))
