function clickHandler() {
  let userName = document.getElementById("name").value;
  document.getElementById("output").value = `
${userName} possesses an exceptional character that distinguishes them as an incredibly kind and virtuous individual. Their genuine concern for others is evident in their actions, which consistently display thoughtfulness and compassion. ${userName}'s generosity knows no bounds, as they consistently extend a helping hand without expecting anything in return. Their selflessness and willingness to support others create an inclusive environment where everyone feels valued and respected. ${userName}'s empathy transcends societal boundaries, embracing individuals from all walks of life. Their remarkable qualities serve as a powerful reminder of the impact that kindness and goodness can have on both individuals and communities. ${userName}'s remarkable character inspires us to follow their lead and cultivate a more compassionate world.`;
}

function changeLight() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  linkColor("white");
  let l = document.getElementById("logo");
  l.src = "day";
}

function linkColor(color) {
  let link = document.getElementsByTagName("a");
  let li = document.getElementsByTagName("li");
  for (let i = 0; i < link.length; i++) {
    link[i].style.color = color;
    li[i].style.borderColor = "black";
  }
}
