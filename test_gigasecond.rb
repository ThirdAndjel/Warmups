require 'minitest/autorun'
require_relative 'gigasecond.rb'
 
class GigaCalculatorTest < MiniTest::Unit::TestCase
	def test_from_year_2000
		assert_equal "One gigasecond after you were born is 2031-09-09 02:46:40 -0700.", GigaCalculator.gigatime(Time.mktime(2000, 1, 1))
	end
end