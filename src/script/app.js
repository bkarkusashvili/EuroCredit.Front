const dialog = document.getElementById('dialog');

const openDialog = () => document.body.classList.add('modal-open');
const closeDialog = () => {
  document.body.classList.remove('modal-open');
};

document.querySelectorAll('button').forEach(item => item.addEventListener('click', openDialog));
document.querySelector('.close').addEventListener('click', closeDialog)
document.querySelector('#dialog').addEventListener('click', (event) => {
  if (event.target.id !== 'dialog') return;

  closeDialog();
})