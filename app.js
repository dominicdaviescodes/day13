const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// call focus method on textarea, cursor is automatically in textarea
textarea.focus();

// keyup when you press down and let go
textarea.addEventListener('keyup', (e) => {
  // this is whatever we type in textarea
  createTags(e.target.value);
});

function createTags(input) {
  // console.log(input);
  // turns into an array
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  // console.log(tags);
  // clear the textarea
  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
