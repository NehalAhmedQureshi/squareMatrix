let para = document.querySelector('#para')
let matrix1 = [
      [1, 2, 3],
      [5, 6, 7],
      [6, 8, 9],
];
let result = []
for (let i = 0; i < matrix1.length; i++) {
      result.push([])
      for (let j = 0; j < matrix1.length; j++) {

            let sum = matrix1[i][j] * matrix1[i][j];
            result[i].push(sum);
            
            console.log(result);
      }

}
