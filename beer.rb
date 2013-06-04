def song number_of_beers
	puts "#{number_of_beers} bottles of beer on the wall, #{number_of_beers} bottles of beer."
	number_of_beers = number_of_beers - 1
	puts "Take one down and pass it around, #{number_of_beers} bottles of beer on the wall"
	puts ''
end
num = 99
while num > 0
	song num
	num = num -1
	if num == 0
		puts 'No more bottles of beer on the wall, no more bottles of beer.'
		puts 'Go to the store and buy some more, 99 bottles of beer on the wall.'
		break
	end
end