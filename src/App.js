import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

// Simple icon components
const Menu = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Building = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Truck = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
);

const ShoppingBag = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_fm9ux4v';
  const EMAILJS_TEMPLATE_ID = 'template_t3tnhef';
  const EMAILJS_PUBLIC_KEY = 'R3WqLe3MGli-s4LLC';

  const testimonials = [
    {
      name: "Sarah Mthembu",
      role: "Local Business Owner",
      content: "Finally, a convenient shopping destination right in our community. This will transform how we do business in Matatiele.",
      rating: 5
    },
    {
      name: "John Khoza",
      role: "Village Resident",
      content: "No more 30km trips for basic groceries. This shopping center is exactly what our community needed.",
      rating: 5
    },
    {
      name: "Mary Dlamini",
      role: "Local Supplier",
      content: "Excited to partner with Nthoabohlokwa. It's great to see support for local farmers and suppliers.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          interest: formData.interest || 'General Inquiry',
          message: formData.message,
          to_name: 'Nthoabohlokwa Shopping Center',
        },
        EMAILJS_PUBLIC_KEY
      );

      alert('Thank you for your message! We will contact you soon.');
      
      setFormData({
        name: '',
        email: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const services = [
    {
      icon: "🛍️",
      title: "Retail Spaces",
      desc: "Modern retail units perfect for clothing stores, electronics, and specialty shops",
      shops: []
    },
    {
      icon: "🍕",
      title: "Food Court",
      desc: "Fast food chains and local cuisine options in our dedicated dining area",
      shops: [
        {
          icon: <img src="/pizza_hut.png" alt="Pizza Hut" className="shop-logo-img" />,
          title: "Pizza Hut",
          desc: "Offering a variety of pizzas and Italian-American cuisine"
        },
        {
          icon: <img src="/pedros.png" alt="Pedros" className="shop-logo-img" />,
          title: "Pedros",
          desc: "Delicious fast food with a focus on flame-grilled chicken"
        },
        {
          icon: <img src="/kfc.png" alt="KFC" className="shop-logo-img" />,
          title: "KFC",
          desc: "World-famous fried chicken and quick-service meals"
        }
      ]
    },
    {
      icon: "🥬",
      title: "Fresh Produce",
      desc: "CheckSave committed to providing fresh vegetables, fruits, and daily essentials",
      shops: [
        {
          icon: <img src="/checksave.png" alt="Checksave" className="shop-logo-img" />,
          title: "Checksave",
          desc: "Providing fresh vegetables, fruits, and daily essentials"
        }
      ]
    },
    {
      icon: "🏪",
      title: "Grocery Stores",
      desc: "Full-service supermarkets for all your household and family needs",
      shops: []
    },
    {
      icon: "🏦",
      title: "Banking Services",
      desc: "Future expansion to include banking facilities and financial services",
      shops: [
        {
          icon: <img src="/capitec.png" alt="Capitec Bank" className="shop-logo-img" />,
          title: "Capitec Bank",
          desc: "Affordable banking services and financial solutions"
        }
      ]
    },
    {
      icon: "🎯",
      title: "Entertainment",
      desc: "Recreational facilities and entertainment venues coming soon",
      shops: []
    },
    {
      icon: "⛽",
      title: "Garages",
      desc: "Fuel and convenience services for all your automotive needs",
      shops: [
        {
          icon: <img src="/astron.png" alt="Astron Garage" className="shop-logo-img" />,
          title: "Astron Energy",
          desc: "Fuel and convenience services for all your automotive needs"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Nthoabohlokwa</h1>
                <p className="text-xs text-gray-600">Shopping Center</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-bounce mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <ShoppingBag className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nthoabohlokwa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Bringing convenient shopping and essential services right to your doorstep in Matatiele. 
              No more 30km journeys - everything you need is now within reach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Lease Space
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { number: "225k+", label: "People Served" },
                { number: "20+", label: "Villages Connected" },
                { number: "50+", label: "Jobs Created" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Transforming <span className="text-blue-600">Matatiele</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're bridging the gap in accessibility to essential services, creating a thriving commercial hub 
              that serves over 225,000 residents across 20+ villages around Sibi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6 text-blue-600" />,
                    title: "Accessible Location",
                    desc: "Strategically positioned to serve multiple villages with easy access"
                  },
                  {
                    icon: <Users className="h-6 w-6 text-green-600" />,
                    title: "Community Focused",
                    desc: "Supporting local suppliers, farmers, and creating employment opportunities"
                  },
                  {
                    icon: <Truck className="h-6 w-6 text-purple-600" />,
                    title: "Reduced Travel",
                    desc: "Cutting down 30km journeys to just minutes from your doorstep"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Team</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Yvo Khotso Sefoloko",
                    role: "Founder (Managing Director)",
                    phone: "+27712837213",
                    displayPhone: "+27 71 283 7213"
                  },
                  {
                    name: "Refiloe Maphela",
                    role: "Marketing Manager",
                    phone: "+27761767125",
                    displayPhone: "+27 76 176 7125"
                  },
                  {
                    name: "Dlamini Mngoma",
                    role: "Electrical Systems Manager",
                    phone: "+27799555027",
                    displayPhone: "+27 79 955 5027"
                  },
                  {
                    name: "WT Tshepang Sefoloko",
                    role: "Head of Security",
                    phone: "+27638302545",
                    displayPhone: "+27 63 830 2545"
                  },
                  {
                    name: "Herbert Sefoloko",
                    role: "Exhibition Coordinator & Leasing",
                    phone: "+27625869658",
                    displayPhone: "+27 62 586 9658"
                  }
                ].map((member, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                     {member.phone && (
  <>
    {/* Show "Phone" link only on screens smaller than sm */}
    <p className="text-sm text-gray-600 sm:hidden">
      <a
        href={`tel:${member.phone}`}
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Phone
      </a>
    </p>

    {/* Show the actual phone number starting at sm and up */}
    <p className="text-sm text-gray-600 hidden sm:block">
      <a
        href={`tel:${member.phone}`}
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {member.displayPhone}
      </a>
    </p>
  </>
)}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From essential groceries to entertainment, we're creating a comprehensive shopping and service destination.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleCategory(service.title)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                  {service.shops.length > 0 && (
                    <ArrowRight className={`h-5 w-5 text-gray-600 transform transition-transform duration-300 ${expandedCategories[service.title] ? 'rotate-90' : ''}`} />
                  )}
                </button>
                {service.shops.length > 0 && (
                  <div className={`mt-4 space-y-4 ${expandedCategories[service.title] ? 'expanded' : 'collapsed'}`}>
                    {service.shops.map((shop, shopIndex) => (
                      <div key={shopIndex} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center space-x-4">
                          <div>{shop.icon}</div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{shop.title}</h4>
                            <p className="text-gray-600 text-sm">{shop.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Business?</h3>
            <p className="text-lg mb-8 opacity-90">
              Join our growing community of entrepreneurs and tap into the 225,000+ potential customers in Matatiele.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Lease a Space Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our <span className="text-blue-600">Community</span> Says
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build <span className="text-blue-400">Together</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to be part of Matatiele's transformation? Contact us today to secure your retail space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Location",
                    info: (
                      <>
                        Matatiele, KwaZulu-Natal, South Africa{' '}
                        <a
                          href="https://www.google.com/maps?q=-30.285186,28.781073"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          (-30.285186, 28.781073)
                        </a>
                      </>
                    )
                  },
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: "Phone",
                    info: "Contact us for more information"
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Email",
                    info: "nthoabohlokwa.centre@gmail.com"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{contact.title}</h4>
                      <p className="text-gray-300">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email *"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:border-blue-400 focus:outline-none transition-colors"
                  >
                    <option value="">Interested in...</option>
                    <option value="retail">Retail Space</option>
                    <option value="food">Food Court Space</option>
                    <option value="services">Service Business</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message *"
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Nthoabohlokwa Shopping Center</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-8">Transforming Matatiele, one business at a time.</p>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 Nthoabohlokwa Shopping Center. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;