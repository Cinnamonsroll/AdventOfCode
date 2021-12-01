with open('./input.txt', 'r') as handle:
    text = handle.read().splitlines()
    numbers = []
    length = len(text)
    preSum = None
    i = 0
    increased = 0
    while i < length:
        if i == 0:
            numbers.extend(int(j) for j in [text[i], text[i + 1], text[i + 2]])
            preSum = numbers[0] + numbers[1] + numbers[2]
            i += 1
            continue
        try:
            numbers.append(int(text[i + 2]))
        except IndexError:
            i += 1
            continue
        curSum = numbers[i] + numbers[i + 1] + numbers[i + 2]
        if curSum > preSum:
            increased += 1
        preSum = curSum
        i += 1
    print(increased)
