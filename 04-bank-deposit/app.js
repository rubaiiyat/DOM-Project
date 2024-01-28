function main() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1;
  const date = currentTime.getDate();

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const depostBalance = document.getElementById("deposit-balance");
  const depositInput = document.getElementById("deposit-input");
  const depositBtn = document.getElementById("deposit-btn");
  const alertMsz = document.getElementById("alert");
  const alertWithdraw = document.getElementById("alertWithdraw");
  const depositHistory = document.getElementById("deposit-history");
  const withdrawHistory = document.getElementById("withdraw-history");

  const balance = document.getElementById("balance");

  const withdraw = document.getElementById("withdraw");
  const withdrawBtn = document.getElementById("withdrawBtn");
  const inputWithdraw = document.getElementById("inputWithdraw");

  depositBtn.addEventListener("click", () => {
    const inputDeposit = depositInput.value.trim();
    const currentDeposit = parseFloat(depostBalance.textContent.trim());
    const currentBalance = parseFloat(balance.textContent.trim());

    if (inputDeposit == "") {
      alertMsz.innerText = "Your Input Field Is Empty";
    } else if (isNaN(inputDeposit)) {
      alertMsz.innerText = "Invalid Number";
      depositInput.value = "";
    } else if (inputDeposit <= 0) {
      alertMsz.innerText = "Please Deposit Atleast $1";
    } else {
      const newDeposit = parseFloat(inputDeposit);
      const depositAmount = newDeposit + currentDeposit;
      const newBalance = newDeposit + currentBalance;

      depostBalance.innerText = depositAmount.toFixed(2);
      balance.innerText = newBalance.toFixed(2);

      const yearTag = document.createElement("p");
      const timeTag = document.createElement("p");
      const newHistory = document.createElement("p");

      depositHistory.appendChild(yearTag);
      depositHistory.appendChild(timeTag);

      newHistory.textContent = "Amount: $";
      depositHistory.appendChild(newHistory);
      const newAmountHistory = document.createElement("span");
      newHistory.appendChild(newAmountHistory);

      newHistory.appendChild(yearTag);
      yearTag.textContent = `Year: ${date}-${month}-${year}`;

      newHistory.appendChild(timeTag);
      timeTag.textContent = `Time: ${hour}-${minute}-${second}`;
      newAmountHistory.textContent = newDeposit;

      alertMsz.innerText = "";
    }

    depositInput.value = "";
  });

  withdrawBtn.addEventListener("click", () => {
    const withDrawInput = inputWithdraw.value.trim();
    const currentWithdraw = parseFloat(withdraw.textContent.trim());
    const currentBalance = parseFloat(balance.textContent.trim());

    if (withDrawInput == "") {
      alertWithdraw.innerText = "Your Input Field Is Empty";
    } else if (isNaN(withDrawInput)) {
      alertWithdraw.innerText = "Invalid Number";
    } else if (withDrawInput <= 0) {
      alertWithdraw.innerText = "Please withdraw Atleast $1";
    } else if (withDrawInput >= currentBalance) {
      alertWithdraw.innerText = "You Have Not Enough Money";
    } else {
      const newWithdraw = parseFloat(withDrawInput);
      const withdrawAmount = newWithdraw + currentWithdraw;
      const newBalance = currentBalance - withDrawInput;

      withdraw.innerText = withdrawAmount.toFixed(2);
      balance.innerText = newBalance.toFixed(2);

      const yearTag = document.createElement("p");
      const timeTag = document.createElement("p");
      const newHistory = document.createElement("p");

      withdrawHistory.appendChild(yearTag);
      withdrawHistory.appendChild(timeTag);

      newHistory.textContent = "Amount: $";
      withdrawHistory.appendChild(newHistory);
      const newAmountHistory = document.createElement("span");
      newHistory.appendChild(newAmountHistory);

      newHistory.appendChild(yearTag);
      yearTag.textContent = `Year: ${date}-${month}-${year}`;

      newHistory.appendChild(timeTag);
      timeTag.textContent = `Time: ${hour}-${minute}-${second}`;
      newAmountHistory.textContent = newWithdraw;
      alertWithdraw.innerText = "";
    }

    inputWithdraw.value = "";
  });
}

document.addEventListener("DOMContentLoaded", main);
