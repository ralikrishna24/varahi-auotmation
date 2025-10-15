import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAutomation from "@/assets/hero-automation.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroTech from "@/assets/hero-tech.jpg";

const slides = [
  {
    image: heroAutomation,
    title: "Master Industrial Automation",
    subtitle:
      "Shape the future with cutting-edge PLC, SCADA, and robotics training",
    cta: "Start Your Journey",
  },
  {
    image: heroStudents,
    title: "100% Placement Assistance",
    subtitle: "Join our successful alumni at top tech companies worldwide",
    cta: "View Success Stories",
  },
  {
    image: heroTech,
    title: "Learn from Industry Experts",
    subtitle: "Certified trainers with real-world automation experience",
    cta: "Explore Courses",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-lg px-8 py-6"
                >
                  <a
                    href="https://forms.gle/dp7qUBzzsiYsAFsE6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-background/40 transition-colors z-10"
      >
        <ChevronLeft className="h-8 w-8 text-primary-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-background/40 transition-colors z-10"
      >
        <ChevronRight className="h-8 w-8 text-primary-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
