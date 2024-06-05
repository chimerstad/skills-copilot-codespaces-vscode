function skillsMember() {
  // Get the member's skills
  const member = document.querySelector('.member');
  const skills = member.querySelectorAll('.skill');
  let skillsArray = [];
  skills.forEach(skill => {
    skillsArray.push(skill.textContent);
  });
  return skillsArray;
}