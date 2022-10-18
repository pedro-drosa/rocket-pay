import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"],
  }

  const [primaryColor, secondaryColor] = colors[type]

  ccBgColor01.setAttribute("fill", primaryColor)
  ccBgColor02.setAttribute("fill", secondaryColor)
  ccLogo.setAttribute("src", `/cc-${type}.svg`)
}

globalThis.setCardType = setCardType
