const API_URL = "http://localhost:3000/api";

export const addUser = async(data) => {
    console.log("Adding user:", data);
    const res = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  console.log("User added:", await res.json());
}

export const getUsers = async () => {
    const res = await fetch(`${API_URL}/usuarios`);
    return res.json();
}

export const deleteUser = async (id) => {
    await fetch(`${API_URL}/usuarios/${id}`, { method: "DELETE" });
}

export const getCategories = async () => {
    const res = await fetch(`${API_URL}/categorias`);
    return res.json();
}

export const addCategory = async (data) => {
    await fetch(`${API_URL}/categorias`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export const deleteCategory = async (id) => {
    await fetch(`${API_URL}/categorias/${id}`, { method: "DELETE" });
}

// SUBCATEGORÍAS
export const getSubCategories = async () => {
    const res = await fetch(`${API_URL}/subcategorias`);
    return res.json();
}

export const addSubCategory = async (data) => {
    await fetch(`${API_URL}/subcategorias`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export const deleteSubCategory = async (id) => {
    await fetch(`${API_URL}/subcategorias/${id}`, { method: "DELETE" });
}

// COMENTARIOS
export const getComments = async () => {
    const res = await fetch(`${API_URL}/comentarios`);
    return res.json();
}

export const getCommentsByBlog = async (id_blog) => {
    const res = await fetch(`${API_URL}/comentarios/blog/${id_blog}`);
    return res.json();
}

export const addComment = async (data) => {
    await fetch(`${API_URL}/comentarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export const deleteComment = async (id) => {
    await fetch(`${API_URL}/comentarios/${id}`, { method: "DELETE" });
}

// BLOGS
export const getBlogs = async () => {
    const res = await fetch(`${API_URL}/blogs`);
    return res.json();
}

export const addBlog = async (data) => {
    await fetch(`${API_URL}/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export const deleteBlog = async (id) => {
    await fetch(`${API_URL}/blogs/${id}`, { method: "DELETE" });
}