with open('../input.txt', 'r') as handle:
    data = [int(x, 2) for x in handle]
    bits = max(x.bit_length() for x in data)
o2, co2 = [*data], [*data]
for i in range(bits - 1, -1, -1):
    o2_bit = sum((x >> i) & 1 for x in o2) >= len(o2) / 2
    o2 = [x for x in o2 if (x >> i) & 1 == o2_bit] or o2

for i in range(bits - 1, -1, -1):
    co2_bit = sum((x >> i) & 1 for x in co2) < len(co2) / 2
    co2 = [x for x in co2 if (x >> i) & 1 == co2_bit] or co2

print(o2[0] * co2[0])
