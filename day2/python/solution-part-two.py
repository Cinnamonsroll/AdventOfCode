with open('../input.txt', 'r') as handle:
    text = handle.read().splitlines()
    i = 0
    length = len(text)
    depth = 0
    horizontal = 0
    aim = 0
    while i < length:
        [type, number] = text[i].split(' ')
        number = int(number)
        if type == 'forward':
            horizontal += number
            depth += number * aim
        elif type == 'down':
            aim += number
        elif type == 'up':
            aim -= number
        i += 1
        
    print(horizontal * depth)
