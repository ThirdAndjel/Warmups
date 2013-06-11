class Grandma
	def initialize
		respond
	end
	def respond
		puts 'What would you like to say to Grandma?'
		input = gets.chomp
		if input == "BYE"
			puts 'Bye kiddo!'
			return
		elsif input == input.upcase
			year = rand(21) + 1930
			puts "NO, NOT SINCE #{year}"
		else
			puts 'HUH?! SPEAK UP, SONNY!'
		end
		respond
	end
end
Grandma.new