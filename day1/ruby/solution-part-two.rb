file = File.open('input.txt')
file_data = file.readlines.map(&:chomp)
increased = 0
preSum = nil
numbers = []
(0..file_data.length).each do |i|
  if i === 0
    numbers.push(file_data[i], file_data[i + 1], file_data[i + 2])
    preSum = numbers[0].to_i + numbers[1].to_i + numbers[2].to_i
    next
  end
  numbers.push(file_data[i + 2].to_i)
  curSum = numbers[i].to_i + numbers[i + 1].to_i + numbers[i + 2].to_i
  increased += 1 if curSum > preSum
  preSum = curSum
end
puts increased
