class Grains

  @@board = Hash.new
  @@total = 0

  def initialize
    @sum = 1
  end

  def square2(num)
    start = 1
    counter = 1
    while counter < num
      start = start * 2
      counter += 1
      @sum = @sum + start
    end
    start
  end

  def square(num)
    if @@board[num].nil?
      @@board[num] = square2(num)
    else
      @sum = @sum + @@board[num]
      @@board[num]
    end
  end

  def get_value(square)
    @@board[square]
  end

  def total
    square(64)
    @sum * 2
  end

end
