document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await api.post('/auth/login', { email, password });
      alert(response.data.message);
    } catch (error) {
      alert('Erro ao fazer login');
    }
  });
  