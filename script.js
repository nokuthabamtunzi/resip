// DOM Elements
const recipesGrid = document.getElementById('recipesGrid');
const categoryButtons = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close');

// Global state
let currentCategory = 'all';
let currentSearchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipesData);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Category filter
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            currentSearchQuery = ''; // Reset search
            searchInput.value = '';
            filterAndDisplayRecipes();
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase();
        filterAndDisplayRecipes();
    });

    // Modal close
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Filter and display recipes based on category and search
function filterAndDisplayRecipes() {
    let filtered = recipesData;

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(recipe => recipe.category === currentCategory);
    }

    // Filter by search query
    if (currentSearchQuery) {
        filtered = filtered.filter(recipe => {
            const titleMatch = recipe.title.toLowerCase().includes(currentSearchQuery);
            const descMatch = recipe.description.toLowerCase().includes(currentSearchQuery);
            const ingredientsMatch = recipe.ingredients.some(ing =>
                ing.toLowerCase().includes(currentSearchQuery)
            );
            return titleMatch || descMatch || ingredientsMatch;
        });
    }

    displayRecipes(filtered);
}

// Display recipes on the page
function displayRecipes(recipes) {
    recipesGrid.innerHTML = '';

    if (recipes.length === 0) {
        recipesGrid.innerHTML = '<div class="no-results">No recipes found. Try a different search or category.</div>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipesGrid.appendChild(recipeCard);
    });
}

// Create a recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = `recipe-card ${recipe.category}`;
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-content">
            <span class="recipe-category">${capitalizeCategory(recipe.category)}</span>
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
                <span>${recipe.prepTime}</span>
                <span>${recipe.cookTime}</span>
                <span>${recipe.servings} servings</span>
            </div>
            <button class="view-recipe-btn" onclick="openModal(${recipe.id})">
                View Recipe
            </button>
        </div>
    `;
    return card;
}

// Open modal with full recipe details
function openModal(recipeId) {
    const recipe = recipesData.find(r => r.id === recipeId);
    if (!recipe) return;

    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalCategory').textContent = capitalizeCategory(recipe.category);
    document.getElementById('modalImage').src = recipe.image;

    // Ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.textContent = ing;
        ingredientsList.appendChild(li);
    });

    // Instructions
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instr => {
        const li = document.createElement('li');
        li.textContent = instr;
        instructionsList.appendChild(li);
    });

    // Meta info
    document.getElementById('modalPrepTime').textContent = recipe.prepTime;
    document.getElementById('modalCookTime').textContent = recipe.cookTime;
    document.getElementById('modalServings').textContent = recipe.servings;

    modal.classList.add('show');
}

// Close modal
function closeModal() {
    modal.classList.remove('show');
}

// Utility function to capitalize category names
function capitalizeCategory(category) {
    const capitalizations = {
        'breakfast': '🌅 Breakfast',
        'starter': '🥗 Starter',
        'main': '🍽️ Main Meal',
        'dessert': '🍰 Dessert',
        'dinner': '🍖 Dinner',
        'snack': '🍪 Snack'
    };
    return capitalizations[category] || category;
}

// Allow closing modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
