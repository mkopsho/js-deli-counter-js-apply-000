function takeANumber(line, newPerson) {
  for (var i = 0; i < newPerson.length; i++) {
    line.push(newPerson);
  }
  return `Welcome, ${newPerson}. You are number ${line[i] + 1} in line.`;
}