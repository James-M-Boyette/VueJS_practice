def diagonalDifference(matrix)
  i = 0
  matrix.each do
    while i < matrix.length
      p matrix[i]
      i += 1
    end
  end
end

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])
