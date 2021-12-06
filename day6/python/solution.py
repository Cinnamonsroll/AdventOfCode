with open('../input.txt', 'r') as handle:
    ageCounts = [0] * 9
    for age in [int(i) for i in handle.read().split(",")]:
        ageCounts[age] += 1
    for i in range(80):
        ageCounts[(i + 7) % 9] += ageCounts[i % 9]
    print(sum(ageCounts))
