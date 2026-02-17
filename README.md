# FitVerse - Fitness Website

A modern fitness website built with Django REST Framework (backend) and React (frontend). FitVerse offers a beautiful, responsive home page showcasing fitness services, trainers, testimonials, and more.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design built with React and Tailwind CSS
- **Django REST Framework Backend**: Robust API for managing trainers, services, and testimonials
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: Smooth animations and transitions
- **Service Showcase**: Display different fitness programs and pricing
- **Trainer Profiles**: Meet our certified trainers
- **Testimonials**: Real member reviews and ratings
- **Newsletter Subscription**: Stay updated with fitness tips

## 📁 Project Structure

```
FitVerse_demo/
├── backend/                 # Django REST Framework Backend
│   ├── fitverse/           # Main Django project
│   │   ├── settings.py     # Django settings
│   │   ├── urls.py         # Main URL configuration
│   │   └── ...
│   ├── api/                # API application
│   │   ├── models.py       # Database models
│   │   ├── serializers.py  # DRF serializers
│   │   ├── views.py        # API views
│   │   └── urls.py         # API URLs
│   ├── manage.py           # Django management script
│   └── requirements.txt    # Python dependencies
│
└── frontend/               # React Frontend
    ├── src/
    │   ├── components/     # React components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Services.jsx
    │   │   ├── Trainers.jsx
    │   │   ├── Testimonials.jsx
    │   │   └── Footer.jsx
    │   ├── pages/          # Page components
    │   │   └── HomePage.jsx
    │   ├── App.jsx         # Main App component
    │   ├── main.jsx        # Entry point
    │   └── index.css       # Global styles
    ├── index.html          # HTML template
    ├── package.json        # Node dependencies
    ├── vite.config.js      # Vite configuration
    └── tailwind.config.js  # Tailwind CSS configuration
```

## 🛠️ Installation & Setup

### Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

### Backend Setup (Django REST Framework)

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - Mac/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**
   ```bash
   python manage.py runserver
   ```

   The backend API will be available at `http://localhost:8000`

### Frontend Setup (React + Vite)

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

## 🎯 Usage

1. **Start the backend server** (in the backend directory):
   ```bash
   python manage.py runserver
   ```

2. **Start the frontend server** (in the frontend directory):
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

4. **Access the Django Admin** (optional):
   - Navigate to `http://localhost:8000/admin`
   - Login with your superuser credentials
   - Add trainers, services, and testimonials

## 🎨 Home Page Sections

1. **Navigation Bar**: Fixed top navigation with smooth scrolling
2. **Hero Section**: Eye-catching hero with call-to-action buttons and stats
3. **Services Section**: Showcase of 4 main fitness programs with pricing
4. **Trainers Section**: Meet our certified trainers with their specialties
5. **Testimonials Section**: Client reviews with ratings
6. **Footer**: Contact information, quick links, and newsletter subscription

## 🔧 API Endpoints

- `GET /api/trainers/` - List all trainers
- `GET /api/services/` - List all active services
- `GET /api/testimonials/` - List all testimonials
- `GET /api/home/` - Get all home page data in one call

## 🎨 Technologies Used

### Backend
- Django 5.0.1
- Django REST Framework 3.14.0
- Django CORS Headers 4.3.1
- SQLite (default database)

### Frontend
- React 18.2.0
- Vite 5.0.11
- Tailwind CSS 3.4.1
- React Router DOM 6.21.1
- Lucide React (icons)
- Axios (API calls)

## 🌟 Features to Implement (Future Enhancements)

- [ ] User authentication and registration
- [ ] Membership plans and payment integration
- [ ] Booking system for personal training sessions
- [ ] Workout tracking and progress monitoring
- [ ] Nutrition plans and meal tracking
- [ ] Blog section with fitness articles
- [ ] Live chat support
- [ ] Mobile app version

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Built with ❤️ by FitVerse Team

## 📞 Support

For support, email info@fitverse.com or visit our contact section on the website.

---

**Happy Coding! 💪🏋️‍♂️**
