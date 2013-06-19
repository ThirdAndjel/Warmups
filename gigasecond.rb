class GigaCalculator
	def self.get_time
		puts 'What year were you born in?'
		year = gets.chomp.to_i
		puts ''
		puts 'What month were you born in (number form please)?'
		month = gets.chomp.to_i
		puts ''
		puts 'What day were you born on?'
		day = gets.chomp.to_i

		puts gigatime(Time.mktime(year, month, day))
	end

	def self.gigatime(input)
		output = input + 1000000000
		return "One gigasecond after you were born is #{output}."
	end
end

# GigaCalculator.get_time