import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coursePlc from "@/assets/course-plc.jpg";
import courseScada from "@/assets/course-scada.jpg";
import courseIot from "@/assets/course-iot.jpg";

const courses = [
  {
    category: "Core Automation",
    items: [
      {
        title: "PLC Programming",
        image: coursePlc,
        description: "Master Programmable Logic Controllers with hands-on training in ladder logic, function blocks, and structured text programming.",
        features: ["Mitsubishi","Allen-Bradley","Siemens S7",  "Industry Projects"],
      },
      {
        title: "SCADA Systems",
        image: courseScada,
        description: "Learn to design and implement Supervisory Control and Data Acquisition systems for industrial process monitoring.",
        features: ["WinCC", "InTouch", "iFIX", "Real-time Monitoring"],
      },
      {
        title: "HMI Development",
        image: coursePlc,
        description: "Create intuitive Human-Machine Interfaces for industrial automation systems with modern design principles.",
        features: ["Touch Panel Design", "Graphics", "Alarms", "Trends"],
      },
    ],
  },
  {
    category: "Packed Course",
    items: [
      {
        title: "Industrial IoT & Robotics",
        image: courseIot,
        description: "Explore the convergence of automation and IoT, including smart sensors, connectivity, and robotic systems.",
        features: ["IIoT Protocols", "Robot Programming", "Edge Computing", "Cloud Integration"],
      },
      {
        title: "Motion Control Systems",
        image: courseScada,
        description: "Advanced training in servo systems, drives, and precise motion control for manufacturing applications.",
        features: ["Servo Drives", "VFDs", "Motion Planning", "Synchronization"],
      },
      {
        title: "DCS Systems",
        image: coursePlc,
        description: "Distributed Control Systems for large-scale process industries and complex automation networks.",
        features: ["Process Control", "Redundancy", "Batch Control", "Historian"],
      },
    ],
  },
  {
    category: "Certification Tracks",
    items: [
      {
        title: "Siemens Certification",
        image: coursePlc,
        description: "Industry-recognized Siemens certification track covering TIA Portal, S7-1200/1500, and WinCC.",
        features: ["TIA Portal", "S7-1500", "WinCC", "Official Cert"],
      },
      {
        title: "Rockwell Certification",
        image: courseScada,
        description: "Allen-Bradley certification pathway including ControlLogix, Studio 5000, and FactoryTalk.",
        features: ["Studio 5000", "ControlLogix", "FactoryTalk", "Official Cert"],
      },
      {
        title: "Multi-Vendor Track",
        image: courseIot,
        description: "Comprehensive multi-vendor certification covering major automation platforms and technologies.",
        features: ["Multiple Platforms", "Flexible Learning", "Industry Ready", "Full Stack"],
      },
    ],
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive automation training programs designed to make you industry-ready
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      {courses.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((course, courseIndex) => (
                <Card
                  key={courseIndex}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6">
                    <Button asChild className="w-full bg-gradient-accent">
                      <Link to="/contact">Enroll Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Eligibility Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Who Can Enroll?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Engineering Graduates</h3>
                  <p className="text-primary-foreground/80">B.Tech/B.E. in EEE, ECE, Mechanical, or related fields</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Diploma Holders</h3>
                  <p className="text-primary-foreground/80">Diploma in Electrical, Electronics, or Instrumentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Working Professionals</h3>
                  <p className="text-primary-foreground/80">IT professionals looking to transition to automation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Career Switchers</h3>
                  <p className="text-primary-foreground/80">Anyone passionate about learning automation technology</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Start Your Journey Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
