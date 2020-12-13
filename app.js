const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// call focus method on textarea, cursor is automatically in textarea
textarea.focus();

// keyup when you press down and let go
textarea.addEventListener('keyup', (e) => {
  // this is whatever we type in textarea
  createTags(e.target.value);
  // if we hit enter wait 10ms, then clear the input value
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
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

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  // every 100ms -  the flashing effect on choices tags
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  // stop and pick a tag
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  // get all elements with class of tag
  const tags = document.querySelectorAll('.tag');
  // get a random one
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
