function takeANumber(line, newPerson) {
  for (var i = 0; i < newPerson.length; i++) {
    line.push(newPerson);
    return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
  }
}

function nowServing(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return "There is nobody waiting to be served!"
}