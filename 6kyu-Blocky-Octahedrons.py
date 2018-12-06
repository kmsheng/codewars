def create_octahedron(size):
    octahedron = []
    if size % 2 == 0 or size == 1:
        return []
    l = size / 2
    for i in range(0, size):
        h = i
        if h > l:
            h = size - i - 1
        arr = []
        for j in range(0, size):
            row = []
            for k in range(0, size):
                delta = abs(l - j)
                if (l - h + delta) <= k and k <= (l + h - delta):
                    row.append(1)
                else:
                    row.append(0)
            arr.append(row)
        octahedron.append(arr)

    return octahedron

print create_octahedron(7)
