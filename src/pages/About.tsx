import React from 'react';
import { 
  User, 
  GraduationCap, 
  Award, 
  Target, 
  Eye, 
  Heart,
  Sprout,
  Globe,
  Users,
  TrendingUp,
  Leaf,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: <Sprout className="h-8 w-8 text-primary-600" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to revolutionize traditional farming practices'
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: 'Sustainability',
      description: 'Promoting environmentally responsible farming that preserves our planet for future generations'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Empowerment',
      description: 'Equipping farmers with knowledge and tools to make informed decisions and maximize productivity'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Growth',
      description: 'Facilitating agricultural growth through data-driven insights and precision farming techniques'
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: 'Bachelor\'s Degree in Agriculture',
      subtitle: 'Crop Production Specialization',
      description: 'Kwara State University, Malete'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary-600" />,
      title: 'Research Excellence',
      subtitle: 'Agricultural Innovation',
      description: 'Focused on sustainable crop production and precision agriculture'
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary-600" />,
      title: 'Field Experience',
      subtitle: 'Practical Agriculture',
      description: 'Hands-on experience in modern farming techniques and crop management'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <Sprout className="h-12 w-12 text-primary-600" />
              <h1 className="text-5xl font-bold text-gray-900">Ace Vision</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing agriculture through precision farming technology, empowering farmers 
              to optimize their operations and contribute to global food security.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Eye className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the global leader in precision agriculture technology, creating a world where 
                every farmer, regardless of scale or location, has access to intelligent farming solutions 
                that maximize productivity, minimize environmental impact, and ensure sustainable food 
                production for future generations.
              </p>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-primary-800 font-medium">
                  "Transforming agriculture through technology to feed the world sustainably"
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-secondary-100 rounded-full p-3 mr-4">
                  <Target className="h-8 w-8 text-secondary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To empower farmers worldwide with cutting-edge precision agriculture tools that provide 
                real-time insights, predictive analytics, and actionable recommendations for optimal 
                crop and livestock management.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-secondary-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-secondary-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Democratize access to advanced agricultural technology</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-secondary-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-secondary-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Promote sustainable and environmentally conscious farming practices</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-secondary-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-secondary-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Increase agricultural productivity and profitability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our mission and drive our innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About the Author */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-12">
              <div className="text-center">
                <div className="bg-white rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">About the Author</h2>
                <p className="text-primary-100 text-lg">Meet the visionary behind Ace Vision</p>
              </div>
            </div>

            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Oyetola Moses Mosadioluwa
                  </h3>
                  <p className="text-lg text-primary-600 font-medium mb-4">
                    Founder & Chief Agricultural Officer
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <GraduationCap className="h-5 w-5" />
                    <span>Bachelor's Degree in Agriculture (Crop Production)</span>
                  </div>
                  <p className="text-gray-500 mt-1">Kwara State University, Malete</p>
                </div>

                <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed mb-8">
                  <p>
                    Oyetola Moses Mosadioluwa is a passionate agricultural professional and technology 
                    enthusiast who combines deep agricultural knowledge with innovative technology solutions. 
                    As a graduate of Kwara State University, Malete, with a Bachelor's degree in Agriculture 
                    specializing in Crop Production, Oyetola brings both theoretical understanding and 
                    practical experience to the field of precision agriculture.
                  </p>
                  
                  <p>
                    With a vision to revolutionize farming practices across Africa and beyond, Oyetola 
                    recognized the critical need for accessible, technology-driven solutions that could 
                    help farmers optimize their operations while promoting sustainable agricultural practices. 
                    This realization led to the creation of Ace Vision - a comprehensive precision agriculture 
                    platform designed to empower farmers with the tools and insights they need to thrive 
                    in modern agriculture.
                  </p>

                  <p>
                    Oyetola's expertise in crop production, combined with a deep understanding of the 
                    challenges faced by farmers in developing regions, has shaped Ace Vision into a 
                    practical, user-friendly platform that addresses real-world agricultural needs. 
                    His commitment to sustainable farming practices and agricultural innovation continues 
                    to drive the development of features that not only increase productivity but also 
                    promote environmental stewardship.
                  </p>
                </div>

                {/* Author's Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4">
                        {achievement.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-primary-600 font-medium mb-2">
                        {achievement.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-50 rounded-lg p-6 text-center">
                  <Heart className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Personal Philosophy</h4>
                  <p className="text-gray-700 italic">
                    "Technology should serve humanity, and in agriculture, it should serve those who 
                    feed the world. My goal is to make precision farming accessible to every farmer, 
                    from smallholder operations to large-scale enterprises, ensuring that technological 
                    advancement contributes to food security and environmental sustainability."
                  </p>
                  <p className="text-primary-600 font-medium mt-4">- Oyetola Moses Mosadioluwa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Precision Agriculture Revolution
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Be part of the future of farming. Start your journey with Ace Vision today and 
            transform the way you manage your agricultural operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Start Your Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center px-8 py-3 border border-white text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;