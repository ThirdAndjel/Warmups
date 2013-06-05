unsorted_array = ["Daniel", "Greg", "Lucas", "Jordan", "Patrick", "Katie", "Shane", "Dustin", "Johan", "Collete", "Erica", "Bryan", "Hakimu", "Vera", "Neil", "Rebecca", "Joseph"]
sorted_array = []

puts 'The array before sorting.'
puts unsorted_array
puts ''

def sort some_array
	recursive_sort some_array, []
end

def recursive_sort to_sort, sorted
	smallest_value = ''
	to_sort.each do |current_value|
		if smallest_value == ''
			smallest_value = current_value
		end
		if  current_value < smallest_value
			smallest_value = current_value
		end
	end
	sorted.push(smallest_value)
	to_sort.delete(smallest_value)
	if to_sort[0] == nil
		return sorted
	else
		recursive_sort(to_sort, sorted)
	end
end

sorted_array = sort(unsorted_array)

puts 'The array after sorting.'
puts sorted_array