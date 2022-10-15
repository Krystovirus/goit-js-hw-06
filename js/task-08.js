const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Attention! All registration fields must be filled!');
  }

  const usersInform = { email: email.value, password: password.value };

  console.log(usersInform);
  event.currentTarget.reset();
};
