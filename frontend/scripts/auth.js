// Script de autenticação para login e registro

document.getElementById('login-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Login bem-sucedido!');
        window.location.href = 'admin.html';
      }
    } catch (error) {
      alert('Erro ao fazer login');
    }
  });
  
  document.getElementById('register-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      await api.post('/auth/register', { name, email, password });
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'login.html';
    } catch (error) {
      alert('Erro ao realizar cadastro');
    }
  });
  