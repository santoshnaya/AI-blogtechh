# AI BlogTech - Modern AI Blog Website

A comprehensive, modern AI blog website built with Next.js 14, featuring a stunning dark theme design, multiple pages, and responsive layout. This project showcases the latest in artificial intelligence research, tools, and insights.

## 🌟 Features

- **Modern Dark Theme**: Beautiful dark UI with purple and blue gradients
- **Fully Responsive**: Mobile-first design that works on all devices
- **Multiple Pages**: Home, Blog, AI Tools, Research, About, and Contact pages
- **Blog System**: Article listings with categories, search, and individual post pages
- **AI Tools Directory**: Curated collection of AI tools with ratings and features
- **Research Papers**: Academic papers and research showcase
- **TypeScript**: Full type safety throughout the application
- **Shadcn/ui Components**: Modern, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Images**: Next.js Image component with Unsplash integration

## 📸 Demo

The website includes:

### Homepage
- Hero section with gradient text effects
- Featured articles grid
- Popular topics/categories
- Newsletter subscription

### Blog Page
- Article search and filtering
- Featured posts section
- Grid layout with hover effects
- Category-based filtering

### Individual Blog Posts
- Full article view with rich content
- Author information and metadata
- Related articles suggestions
- Social sharing buttons

### AI Tools Page
- Curated tool directory
- Category filtering
- Ratings and features display
- External links to tools

### Research Page
- Academic papers showcase
- Featured research highlighting
- Author and citation information
- Download links for papers

### About Page
- Team member profiles
- Mission and values
- Company information

### Contact Page
- Contact form with validation
- Multiple contact methods
- FAQ section
- Office information

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-blog-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/                      # Next.js 14 App Router
│   ├── blog/                # Blog pages
│   │   ├── [id]/           # Individual blog post
│   │   └── page.tsx        # Blog listing
│   ├── tools/              # AI Tools page
│   ├── research/           # Research papers page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # Reusable components
│   ├── ui/                # Shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── navigation.tsx     # Main navigation
├── lib/                   # Utility functions
│   └── utils.ts          # Class name utilities
├── public/               # Static assets
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
├── next.config.js      # Next.js configuration
└── README.md          # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple to Blue gradients
- **Background**: Dark theme with proper contrast
- **Text**: High contrast white/gray text
- **Accents**: Purple hover states and highlights

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive text sizing
- **Hierarchy**: Clear heading structure

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Multiple variants with gradient options
- **Navigation**: Sticky header with mobile responsiveness
- **Forms**: Accessible form inputs with focus states

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first approach
- Tablet optimizations
- Desktop enhancements
- Touch-friendly interactions
- Accessible navigation

## 🔧 Customization

### Adding New Blog Posts
1. Add post data to the blog page
2. Create individual post pages in `app/blog/[id]/`
3. Update the blog listing component

### Adding New AI Tools
1. Update the tools array in `app/tools/page.tsx`
2. Add new categories as needed
3. Update filtering logic

### Styling Changes
1. Modify `tailwind.config.ts` for design tokens
2. Update CSS variables in `app/globals.css`
3. Customize component styles in individual files

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Supports Next.js out of the box
- **Docker**: Create Dockerfile for containerization

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using Next.js and modern web technologies**