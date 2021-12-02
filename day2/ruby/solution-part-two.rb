file = File.open('input.txt')
file_data = file.readlines.map(&:chomp)
horizontal = 0
depth = 0
aim = 0
(0..file_data.length).each do |i|
  value, number = file_data[i].to_s.split(/ /)
  case value
  when "forward"
    horizontal += number.to_i
    depth += number.to_i * aim
  when "down"
    aim += number.to_i
  when "up"
    aim -= number.to_i
  end
end
puts horizontal * depth
