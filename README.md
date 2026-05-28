<!-- Recipe website README -->
# 🍳 RecipeHub - Recipe Website

A beautiful, fully-responsive recipe website built with HTML, CSS, and JavaScript. Discover delicious recipes from around the world and easily contact the recipe creator.

## 🌟 Features

✨ **Recipe Catalog**
- Browse hundreds of delicious recipes
- Filter by meal type (Breakfast, Lunch, Dinner, Dessert, Snacks)
- Search recipes by name, ingredients, or description
- Detailed recipe pages with ingredients and step-by-step instructions
- Recipe ratings and review counts

🎨 **Responsive Design**
- Works perfectly on desktop, tablet, and mobile devices
- Beautiful gradient backgrounds and smooth animations
- Professional color scheme and typography
- Touch-friendly interface

📞 **Contact Section**
- Contact form to reach the creator
- Multiple contact methods:
  - Email: nokuthabamtunzi@gmail.com
  - WhatsApp: +27 71 969 7893
  - Phone: 078 540 949
  - Facebook: Nokuthaba Mtunzi
  - Instagram: @nokuthaba297

📱 **User Experience**
- Fast loading times
- Smooth animations and transitions
- Modal popup for detailed recipe views
- Mobile hamburger menu
- Search functionality with real-time filtering

## 📁 Project Structure

```
resip/
├── index.html          # Main home page
├── contact.html        # Contact page with form
├── about.html          # About page
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── script.js       # Main JavaScript with recipe functionality
│   └── contact.js      # Contact form handler
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required!

### Installation

1. Clone or download this repository:
```bash
git clone https://github.com/nokuthabamtunzi/resip.git
```

2. Navigate to the project folder:
```bash
cd resip
```

3. Open `index.html` in your web browser to start browsing recipes!

Alternatively, you can deploy it to:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)
- Any static hosting service

## 📖 Usage

### Browse Recipes
1. Visit the home page to see all recipes
2. Use the filter buttons to narrow down by meal type
3. Use the search bar to find recipes by name or ingredients
4. Click "View Recipe" on any recipe card to see full details

### Contact the Creator
1. Navigate to the "Contact" page
2. Fill in the contact form with your message
3. Or use any of the provided social media links:
   - WhatsApp for quick messaging
   - Facebook for messaging and updates
   - Instagram for food inspiration and updates
   - Email for detailed inquiries
   - Phone for direct calls or WhatsApp

### Learn About RecipeHub
Visit the "About" page to learn more about the website and its creator.

## 🎨 Customization

### Change Colors
Edit the color variables in `css/styles.css`:
```css
:root {
    --primary-color: #FF6B6B;     /* Main color */
    --secondary-color: #4ECDC4;   /* Secondary color */
    --dark-color: #2C3E50;        /* Dark text */
    --light-color: #ECF0F1;       /* Light background */
}
```

### Add More Recipes
Edit `js/script.js` and add new recipe objects to the `recipes` array:
```javascript
{
    id: 9,
    title: 'Your Recipe Title',
    category: 'breakfast', // breakfast, lunch, dinner, dessert, snacks
    image: 'image-url',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Easy',
    rating: 4.8,
    reviews: 245,
    description: 'Recipe description',
    ingredients: ['ingredient 1', 'ingredient 2', ...],
    instructions: ['step 1', 'step 2', ...]
}
```

### Update Contact Information
Update your contact details in:
- `contact.html` - Contact page
- `about.html` - About page
- `index.html` - Footer

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with Flexbox and Grid
- **JavaScript (Vanilla)** - Dynamic functionality
- **Font Awesome** - Icons
- **Unsplash** - Recipe images (free stock photos)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Features in Detail

### Search & Filter
- Real-time search across recipe titles, descriptions, and ingredients
- Filter by meal category
- Instant results display

### Recipe Modal
- Full recipe details in an easy-to-read format
- Numbered cooking instructions
- Ingredient checklist
- Cooking time and difficulty information
- Star ratings and review counts

### Mobile Responsive
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Optimized layout for all screen sizes
- Fast loading on mobile connections

### Social Integration
- Direct links to all social media accounts
- WhatsApp and phone call integration
- Email contact form
- Share-friendly design

## 🤝 Contributing

Have recipe ideas or want to improve the website? Feel free to suggest improvements!

## 📧 Contact Information

**Creator: Nokuthaba Mtunzi**

- 📧 Email: nokuthabamtunzi@gmail.com
- 💬 WhatsApp: +27 71 969 7893
- 📱 Call: 078 540 949
- 👍 Facebook: [Nokuthaba Mtunzi](https://www.facebook.com/nokuthaba.mtunzi)
- 📸 Instagram: [@nokuthaba297](https://www.instagram.com/nokuthaba297)

## 📄 License

This project is free to use and modify for personal and commercial purposes.

## 🙏 Credits

- Icons: [Font Awesome](https://fontawesome.com)
- Images: [Unsplash](https://unsplash.com)
- Fonts: Google Fonts

---

**Happy Cooking! 🍽️**

Made with ❤️ for food lovers everywhere.
