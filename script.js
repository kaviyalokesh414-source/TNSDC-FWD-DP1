function showMore(sectionId) {
  const section = document.getElementById(sectionId);
  const extraInfo = document.createElement('p');
  extraInfo.textContent = sectionId === 'socialMedia'
    ? 'Social media also enables peer-to-peer learning and global collaboration among students and educators.'
    : 'Education platforms offer certifications, interactive content, and community support for learners worldwide.';
  section.appendChild(extraInfo);
}