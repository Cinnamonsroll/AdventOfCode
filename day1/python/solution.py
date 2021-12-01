with open('./input.txt', 'r') as handle:
    text = handle.read().splitlines()
    i = 0
    length = len(text)
    increased = 1
    while i < length:
        if text[i] > text[i-1]:
            increased += 1
        i += 1
    print(increased)
