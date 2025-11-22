import { getComments, addComment, deleteComment, getUsers, getBlogs } from "./api.js";

export const renderComments = async () => {
  const container = document.getElementById("section-comments");
  
  // Obtener blogs y usuarios
  const users = await getUsers();
  const blogs = await getBlogs();
  
  container.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Gestión de Comentarios</h2>

    <form id="form-comment" class="mb-6">
      <div class="grid grid-cols-3 gap-3 mb-3">
        <textarea id="contenido" placeholder="Contenido del comentario" class="border p-2 rounded col-span-3" rows="3" required></textarea>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <select id="usuarioComment" class="border p-2 rounded" required>
          <option value="">Seleccionar usuario</option>
          ${users.map(u => `<option value="${u.id}">${u.nombre}</option>`).join("")}
        </select>
        <select id="blogComment" class="border p-2 rounded" required>
          <option value="">Seleccionar blog</option>
          ${blogs.map(b => `<option value="${b.id}">${b.titulo}</option>`).join("")}
        </select>
      </div>
      <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mt-3 w-full">Agregar Comentario</button>
    </form>

    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Contenido</th>
          <th class="p-2 border">Usuario</th>
          <th class="p-2 border">Blog</th>
          <th class="p-2 border text-center">Acciones</th>
        </tr>
      </thead>
      <tbody id="comment-table"></tbody>
    </table>
  `;

  // Cargar comentarios
  const comments = await getComments();
  const tbody = document.getElementById("comment-table");
  tbody.innerHTML = comments.map(c => `
    <tr>
      <td class="border p-2">${c.id}</td>
      <td class="border p-2 truncate max-w-xs">${c.contenido}</td>
      <td class="border p-2">${users.find(u => u.id === c.id_usuario)?.nombre || 'N/A'}</td>
      <td class="border p-2">${blogs.find(b => b.id === c.id_blog)?.titulo || 'N/A'}</td>
      <td class="border p-2 text-center">
        <button data-id="${c.id}" class="delete-comment bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
      </td>
    </tr>
  `).join("");

  // Evento crear comentario
  document.getElementById("form-comment").addEventListener("submit", async (e) => {
    e.preventDefault();
    await addComment({
      contenido: e.target.contenido.value,
      id_usuario: e.target.usuarioComment.value,
      id_blog: e.target.blogComment.value
    });
    renderComments();
  });

  // Evento eliminar comentario
  document.querySelectorAll(".delete-comment").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      await deleteComment(id);
      renderComments();
    });
  });
};
