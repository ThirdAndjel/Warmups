class Scrabble
  def self.letter_values
    values_hash = {}
    all_letters = [[ 1, 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],[2, 'd', 'g'], [3, 'b', 'c', 'm', 'p'],[4, 'f', 'h', 'v', 'w', 'y'], [5, 'k'],[8, 'j', 'x'], [10, 'q', 'z']]
    all_letters.each do |group|
      value = group.shift
      group.each do |letter|
        values_hash[letter] = [value]
      end
    end
    # puts values_hash
  end

  def self.score(word)
    word.each_char do |letter|
      Scrabble.letter_values
    end

    word_bonus()

    # get letter values, double or triple specific letters, sum, double or triple word
  end

  def letter_bonus(word, letterbonus)
      word.each_char do |letter|
        if letter == letterbonus
          then word = word + (letter * 2)
        elsif letter == letterbonus
          word = word + (letter * 3)
      end
      return word
    end



#         def word_bonus(bonus)
#     if bonus == ':double'
#       return '*2'
#     elsif bonus ==':triple'
#       return '*3'
#     else
#       return nil
#     end

end

puts Scrabble.letter_values

# puts Scrabble.score("mississippi", { :double => ["i", "s"], :triple = ["m"]}, :triple)
# puts Scrabble.score("apple")
# puts Scrabble.score("quote")
# puts Scrabble.score("zebra")
# puts Scrabble.score("xylophone")