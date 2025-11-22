import { getSubCategories, addSubCategory, deleteSubCategory, getCategories } from "./api.js";

export const renderSubCategories = async () => {
  const container = document.getElementById("section-subcategories");
  
  // Obtener categorías para el select
  const categories = await getCategories();
  
  container.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Gestión de Subcategorías</h2>

    <form id="form-subcategory" class="flex gap-3 mb-6">
      <input id="nombreSub" type="text" placeholder="Nombre de subcategoría" class="border p-2 rounded w-1/3" required />
      <select id="categorySub" class="border p-2 rounded w-1/3" required>
        <option value="">Seleccionar categoría</option>
        ${categories.map(c => `<option value="${c.id}">${c.nombre}</option>`).join("")}
      </select>
      <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Agregar</button>
    </form>

    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Nombre</th>
          <th class="p-2 border">Categoría</th>
          <th class="p-2 border text-center">Acciones</th>
        </tr>
      </thead>
      <tbody id="subcategory-table"></tbody>
    </table>
  `;

  // Cargar subcategorías
  const subcategories = await getSubCategories();
  const tbody = document.getElementById("subcategory-table");
  
  // Procesar respuesta según formato del modelo
  const data = subcategories.data || subcategories;
  tbody.innerHTML = (Array.isArray(data) ? data : []).map(s => `
    <tr>
      <td class="border p-2">${s.id}</td>
      <td class="border p-2">${s.nombre_subcategoria || s.nombre}</td>
      <td class="border p-2">${s.nombre_categoria}</td>
      <td class="border p-2 text-center">
        <button data-id="${s.id}" class="delete-subcat bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
      </td>
    </tr>
  `).join("");

  // Evento crear subcategoría
  document.getElementById("form-subcategory").addEventListener("submit", async (e) => {
    e.preventDefault();
    await addSubCategory({
      nombre: e.target.nombreSub.value,
      id_categoria: e.target.categorySub.value
    });
    renderSubCategories();
  });

  // Evento eliminar subcategoría
  document.querySelectorAll(".delete-subcat").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      await deleteSubCategory(id);
      renderSubCategories();
    });
  });
};
