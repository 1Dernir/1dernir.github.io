let body = document.body;

let backBtn = document.createElement('a');
  backBtn.style.color = "#000";
  backBtn.style.border = "2px solid #555";
  backBtn.style.fontWeight = "700";
  backBtn.style.fontFamily = "sans-serif"
  backBtn.style.position = "fixed";
  backBtn.style.top = "0";
  backBtn.style.left = "0";
  backBtn.style.display = "block";
  backBtn.style.textTransform = "uppercase";
  backBtn.style.margin = "20px";
  backBtn.style.padding = "10px";
  backBtn.style.background = "#fff";
  backBtn.style.textDecoration = "none";
  backBtn.style.opacity = ".5";
  backBtn.style.fontSize = "14px";
  backBtn.href = "../../index.html";
  backBtn.innerText = "Назад к портфолио";
  body.appendChild(backBtn);
