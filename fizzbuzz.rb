# (1..100).each do |x|
# 	if (x % 3 == 0 && x % 5 == 0)
# 		puts "fizzbuzz"
# 	elsif ( x % 3 == 0)
# 		puts "fizz"
# 	elsif (x % 5 == 0)
# 		puts "buzz"
# 	else
# 		puts x.to_s
# 	end
# end

(1..100).each do |x|
	message = ""
	if x % 3 == 0
		message += "fizz"
	end
	if x % 5 == 0
		message += "buzz"
	end
	if message == ""
		message = x
	end
	puts message + ""
end