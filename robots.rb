require 'SecureRandom'

class Robot
	def initialize
		name
		@name = ''
	end

	def name
		if @name == ''
			@name = SecureRandom.hex(3).chop
		end
		return @name
	end

	def reset
		@name == ''
	end

	def instruction_count

	end
end