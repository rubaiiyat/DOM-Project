function main() {
  const generateOtp = document.getElementById("generate-otp");
  const myDiv = document.getElementById("mydiv");
  const myOtp = document.getElementById("myOtp");

  const userInput = document.getElementById("userInput");
  const submitBtn = document.getElementById("submitBtn");

  generateOtp.addEventListener("click", (event) => {
    event.preventDefault();

    const randomNum = Math.floor(Math.random() * 9000) + 1000;

    myOtp.innerText = randomNum;

    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const inputValue = userInput.value.trim();

      if (parseInt(inputValue) === randomNum) {
        const otpMsz = document.getElementById("otpMsz");
        otpMsz.style.color = "#06e411";
        otpMsz.innerText = "Congratulations! Success";
      } else {
        otpMsz.style.color = "#af0113";
        otpMsz.innerText = "Wrong OTP. Try again.";
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", main);
