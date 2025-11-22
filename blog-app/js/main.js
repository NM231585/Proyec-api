import { renderUsers } from "./users.js";
import { renderCategories } from "./categories.js";
import { renderSubCategories } from "./subcategories.js";
import { renderBlogs } from "./blogs.js";
import { renderComments } from "./comments.js";

document.addEventListener("DOMContentLoaded", async () => {
  const tabUsers = document.getElementById("tab-users");
  const tabCategories = document.getElementById("tab-categories");
  const tabSubCategories = document.getElementById("tab-subcategories");
  const tabBlogs = document.getElementById("tab-blogs");
  const tabComments = document.getElementById("tab-comments");
  
  const sectionUsers = document.getElementById("section-users");
  const sectionCategories = document.getElementById("section-categories");
  const sectionSubCategories = document.getElementById("section-subcategories");
  const sectionBlogs = document.getElementById("section-blogs");
  const sectionComments = document.getElementById("section-comments");

  // Mostrar usuarios por defecto
  await renderUsers();

  // Helper para cambiar tab activo
  const setActiveTab = (activeTab, activeSection) => {
    [tabUsers, tabCategories, tabSubCategories, tabBlogs, tabComments].forEach(tab => {
      tab.classList.remove("bg-indigo-500", "text-white");
      tab.classList.add("bg-gray-300", "text-gray-700");
    });
    [sectionUsers, sectionCategories, sectionSubCategories, sectionBlogs, sectionComments].forEach(section => {
      section.classList.add("hidden");
    });
    activeTab.classList.add("bg-indigo-500", "text-white");
    activeTab.classList.remove("bg-gray-300", "text-gray-700");
    activeSection.classList.remove("hidden");
  };

  tabUsers.addEventListener("click", async () => {
    setActiveTab(tabUsers, sectionUsers);
    await renderUsers();
  });

  tabCategories.addEventListener("click", async () => {
    setActiveTab(tabCategories, sectionCategories);
    await renderCategories();
  });

  tabSubCategories.addEventListener("click", async () => {
    setActiveTab(tabSubCategories, sectionSubCategories);
    await renderSubCategories();
  });

  tabBlogs.addEventListener("click", async () => {
    setActiveTab(tabBlogs, sectionBlogs);
    await renderBlogs();
  });

  tabComments.addEventListener("click", async () => {
    setActiveTab(tabComments, sectionComments);
    await renderComments();
  });
});
