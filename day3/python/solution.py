with open('../input.txt', 'r') as handle:
    data = [int(x, 2) for x in handle]
    bits = max(x.bit_length() for x in data)
gamma = 0
for i in range(bits):
    gamma_bit = sum((x >> i) & 1 for x in data) > len(data) // 2
    gamma |= gamma_bit << i

print(gamma * (2 ** bits - 1 ^ gamma))
