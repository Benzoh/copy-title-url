const default_input = document.querySelector('#js_default');
const markdown_input = document.querySelector('#js_markdown');
const copyBtn = document.querySelectorAll('.js_btn');

default_input.addEventListener('focus', (event) => {
  copyToClipboard(event.target)
})

markdown_input.addEventListener('focus', (event) => {
  copyToClipboard(event.target)
})

copyBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let elm = document.getElementById(e.target.getAttribute('data-target-id'));
    copyToClipboard(elm);
  })
})

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let title = tabs[0].title;
  let url = tabs[0].url;

  // defalut
  default_input.textContent += title + '\n' + url;

  // markdown
  markdown_input.setAttribute('value', '[' + title + ']\n(' + url + ')');
});

function copyToClipboard(target) {
  target.select();
  document.execCommand("copy");
}