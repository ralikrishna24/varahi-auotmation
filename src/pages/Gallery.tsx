import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coursePlc from "@/assets/course-plc.jpg";
import courseScada from "@/assets/course-scada.jpg";
import courseIot from "@/assets/course-iot.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroAutomation from "@/assets/hero-automation.jpg";
import heroTech from "@/assets/hero-tech.jpg";

const categories = ["All", "Online Learning", "Project Demos", "Success Stories", "Facilities"];

const galleryImages = [
  { src: heroStudents, alt: "Students in online training", category: "Online Learning" },
  { src: coursePlc, alt: "PLC programming project", category: "Project Demos" },
  { src: courseScada, alt: "SCADA system demonstration", category: "Project Demos" },
  { src: courseIot, alt: "IoT robotics project", category: "Project Demos" },
  { src: heroAutomation, alt: "Modern automation facility", category: "Facilities" },
  { src: heroTech, alt: "Advanced technology lab", category: "Facilities" },
  { src: heroStudents, alt: "Certificate ceremony", category: "Success Stories" },
  { src: coursePlc, alt: "Hands-on training session", category: "Online Learning" },
  { src: courseScada, alt: "Control room facility", category: "Facilities" },
  { src: courseIot, alt: "Placement celebration", category: "Success Stories" },
  { src: heroAutomation, alt: "Industrial training equipment", category: "Project Demos" },
  { src: heroTech, alt: "Virtual classroom", category: "Online Learning" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our training environment, student projects, and success celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-gradient-accent" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square animate-scale-in"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-primary-foreground font-semibold">{image.alt}</p>
                    <p className="text-primary-foreground/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Be Part of Our Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have transformed their careers through our training programs
          </p>
          <Button asChild size="lg" className="bg-gradient-accent">
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
