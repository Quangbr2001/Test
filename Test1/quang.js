function primeNum() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const num1Val = parseInt(num1.value);
  const num2Val = parseInt(num2.value);
  const ansText = document.getElementById("ansText");
  const listNum = document.getElementById("listNum");
  const totalNum = document.getElementById("totalNum");
  const total = document.getElementById("total");
  if (num1Val > num2Val) {
    ansText.innerHTML = "Error Syntax!!!";
  } else {
    let sum = 0;
    for (let i = num1Val; i < num2Val; i++) {
      let flag = 0;
      if (i > 1) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            flag = 1;
            break;
          }
        }
        if (i > 1 && flag == 0) {
          console.log(i);
          ansText.innerHTML = "Các số nguyên trong khoảng từ a đến b là: ";
          listNum.innerHTML += i + " ";
          sum += i;
        }
      }
    }
    console.log(sum);
    total.innerHTML = "Tổng các số nguyên trong khoảng là : ";
    totalNum.innerHTML += sum;
  }
}
