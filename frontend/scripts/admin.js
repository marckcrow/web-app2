// Script para a gestão de usuários na tela administrativa

document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Você precisa estar logado para acessar esta página');
      window.location.href = 'login.html';
      return;
    }
  
    try {
      const response = await api.get('/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const users = response.data;
      const userTable = document.getElementById('user-table');
      userTable.innerHTML = '';
  
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button onclick="editUser('${user._id}')">Editar</button>
            <button onclick="deleteUser('${user._id}')">Excluir</button>
          </td>
        `;
        userTable.appendChild(row);
      });
    } catch (error) {
      alert('Erro ao carregar usuários');
    }
  });
  
  async function deleteUser(userId) {
    const token = localStorage.getItem('token');
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        await api.delete(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Usuário excluído com sucesso');
        location.reload();
      } catch (error) {
        alert('Erro ao excluir usuário');
      }
    }
  }
  