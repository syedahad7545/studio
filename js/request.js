// No backend: the form opens the visitor's email app with the request filled in.
const form = document.getElementById('request-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const site = document.getElementById('site').value.trim();
  const name = document.getElementById('name').value.trim();
  const note = document.getElementById('note').value.trim();

  const subject = `Free report request: ${site}`;
  const body = [`Website: ${site}`, `Name: ${name}`, note && `Notes: ${note}`].filter(Boolean).join('\n');
  window.location.href = `mailto:contact@syedabdulahad.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
