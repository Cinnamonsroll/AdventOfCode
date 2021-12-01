file = File.open('input.txt')
file_data = file.readlines.map(&:chomp)
increased = 0
(1..file_data.length).each do |i|
  increased += 1 if file_data[i].to_i > file_data[i - 1].to_i
end
puts increased
