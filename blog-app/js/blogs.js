import { getBlogs, addBlog, deleteBlog, getUsers, getCategories, getSubCategories } from "./api.js";

export const renderBlogs = async () => {
  const container = document.getElementById("section-blogs");
  
  // Obtener datos relacionados
  const users = await getUsers();
  const categories = await getCategories();
  const subcategoriesRes = await getSubCategories();
  const subcategories = subcategoriesRes.data || subcategoriesRes;
  
  container.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Gestión de Blogs</h2>

    <form id="form-blog" class="mb-6">
      <div class="grid grid-cols-1 gap-3 mb-3">
        <input id="tituloBlog" type="text" placeholder="Título del blog" class="border p-2 rounded" required />
        <textarea id="contenidoBlog" placeholder="Contenido del blog" class="border p-2 rounded" rows="4" required></textarea>
        <input id="imagenBlog" type="text" placeholder="URL de imagen (opcional)" class="border p-2 rounded" />
      </div>
      <div class="grid grid-cols-4 gap-3">
        <select id="usuarioBlog" class="border p-2 rounded" required>
          <option value="">Seleccionar usuario</option>
          ${users.map(u => `<option value="${u.id}">${u.nombre}</option>`).join("")}
        </select>
        <select id="categoriaBlog" class="border p-2 rounded" required>
          <option value="">Seleccionar categoría</option>
          ${categories.map(c => `<option value="${c.id}">${c.nombre}</option>`).join("")}
        </select>
        <select id="subcategoriaBlog" class="border p-2 rounded" required>
          <option value="">Seleccionar subcategoría</option>
          ${(Array.isArray(subcategories) ? subcategories : []).map(s => `<option value="${s.id}">${s.nombre_subcategoria || s.nombre}</option>`).join("")}
        </select>
        <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Agregar Blog</button>
      </div>
    </form>

    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Título</th>
          <th class="p-2 border">Usuario</th>
          <th class="p-2 border">Categoría</th>
          <th class="p-2 border">Subcategoría</th>
          <th class="p-2 border text-center">Acciones</th>
        </tr>
      </thead>
      <tbody id="blog-table"></tbody>
    </table>
  `;

  // Cargar blogs
  const blogs = await getBlogs();
  const tbody = document.getElementById("blog-table");
  tbody.innerHTML = blogs.map(b => `
    <tr>
      <td class="border p-2">${b.id}</td>
      <td class="border p-2 truncate max-w-xs">${b.titulo}</td>
      <td class="border p-2">${b.nombre_usuario}</td>
      <td class="border p-2">${b.nombre_categoria}</td>
      <td class="border p-2">${b.nombre_subcategoria}</td>
      <td class="border p-2 text-center">
        <button data-id="${b.id}" class="delete-blog bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
      </td>
    </tr>
  `).join("");

  // Evento crear blog
  document.getElementById("form-blog").addEventListener("submit", async (e) => {
    e.preventDefault();
    await addBlog({
      titulo: e.target.tituloBlog.value,
      contenido: e.target.contenidoBlog.value,
      imagen: e.target.imagenBlog.value || null,
      id_usuario: e.target.usuarioBlog.value,
      id_categoria: e.target.categoriaBlog.value,
      id_subcategoria: e.target.subcategoriaBlog.value
    });
    renderBlogs();
  });

  // Evento eliminar blog
  document.querySelectorAll(".delete-blog").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      await deleteBlog(id);
      renderBlogs();
    });
  });
};
