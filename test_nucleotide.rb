class DNA

  attr_reader :strand
  def initialize(strand)
    @strand = strand
  end

  def count(nucleotide)
    unless valid_nucleotide?(nucleotide)
      raise ArgumentError.new("#{nucleotide} is not a nucleotide.")
    end
    strand.scan(nucleotide).count
  end

  def nucleotide_counts
    counts = {}
    %w(A T C G).each do |letter|
      counts[letter] = count(letter)
    end
    counts
  end

  def valid_nucleotide?(nucleotide)
    %w(A T C G U).include?(nucleotide)
  end

end

require 'minitest/autorun'

class DnaTest < MiniTest::Unit::TestCase
  def setup
    @dna = DNA.new("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")
  end

  def test_error_works
    error = DNA.new("dog")
    assert_raises(ArgumentError) {error.count("dog")}
  end

  def test_count_works
    assert_equal 20, @dna.count("A")
  end

  def test_large_count_works
    hash = {'A' => 20, 'T' => 21, 'G' => 17, 'C' => 12}
    assert_equal hash, @dna.nucleotide_counts
  end

  def test_strand
    strand = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
    assert_equal strand, @dna.strand
  end
end