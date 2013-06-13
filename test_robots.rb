require 'minitest/autorun'
require_relative 'robots.rb'

class RobotsTest < MiniTest::Unit::TestCase
  def test_single_robot
    robot1 = Robot.new
    assert(robot1.name == robot1.name)
  end
  def test_two_robots
    robot1 = Robot.new
    robot2 = Robot.new
    assert(robot1.name == robot1.name)
    assert(robot2.name == robot2.name)
    assert(robot1.name != robot2.name)
  end
end