puts 'Please enter a year.'
user_input = gets.chomp.to_i
output = false

if user_input % 4 != 0
	puts "#{user_input} is not a leap year."
	else
		if user_input % 4 == 0
			output = true
			if user_input % 100 == 0
				output = false
				if user_input % 400 == 0
					output = true
				end
			end
		end

		if output == true
			puts "#{user_input} is a leap year!"
		else
			puts "#{user_input} is not a leap year."
		end
end
