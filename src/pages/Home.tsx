import { Award, Users, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siemens from "../assets/siemens.png";
import abb from "../assets/ABB.png";
import schneider from "../assets/SCHNEIDER ELECTRIC.png";
import rockwell from "../assets/ROCKWELL AUTOMATION.png";
import honeywell from "../assets/HONET WELL.png";
import emerson from "../assets/EMERSON.png";
import mitsubishi from "../assets/MITSBISHI.png";
import bosch from "../assets/BOSCH.png";


const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Automation Engineer at Siemens",
    course: "Advanced PLC Programming",
    quote: "The practical training and expert guidance helped me land my dream job at Siemens.",
  },
  {
    name: "Priya Sharma",
    role: "SCADA Specialist at ABB",
    course: "SCADA & HMI Systems",
    quote: "The hands-on projects gave me real-world experience that set me apart in interviews.",
  },
  {
    name: "Amit Patel",
    role: "IoT Engineer at Schneider Electric",
    course: "Industrial IoT & Robotics",
    quote: "Best decision I made for my career. The trainers are industry veterans with deep knowledge.",
  },
];

const faqs = [
  {
    question: "What are the eligibility criteria for courses?",
    answer: "B.Tech/Diploma in EEE, ECE, Mechanical, or IT professionals looking to upskill.",
  },
  {
    question: "Do you offer both online and offline training?",
    answer: "Yes, we provide flexible learning options with both online and offline training modes.",
  },
  {
    question: "What is the placement assistance process?",
    answer: "We offer 100% placement assistance with resume building, interview prep, and direct company connections.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Why Automation Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Automation Technology?
            </h2>
            <p className="text-lg text-muted-foreground">
              The future of manufacturing and industry is automated. With growing demand for skilled automation professionals, now is the perfect time to build a rewarding career in this cutting-edge field.
            </p>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            What We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Trainers</h3>
                <p className="text-muted-foreground">
                  Learn from industry-certified experts with years of practical experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Online & Offline Training</h3>
                <p className="text-muted-foreground">
                  Flexible learning options to suit your schedule and preferences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Placement Assistance</h3>
                <p className="text-muted-foreground">
                  Comprehensive support to help you secure your dream job
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni Companies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Our Alumni Work At
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Top Tech and Industrial Automation Companies
          </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
  {["Siemens", "ABB", "Schneider Electric", "Rockwell Automation", "Honeywell", "Emerson", "Mitsubishi", "Bosch"].map((company) => (
    <div key={company} className="text-center">
      <div className="h-32 w-40 flex items-center justify-center cursor-pointer group">
        <img
          src={
            company === "Siemens" ? siemens :
            company === "ABB" ? abb :
            company === "Schneider Electric" ? schneider :
            company === "Rockwell Automation" ? rockwell :
            company === "Honeywell" ? honeywell :
            company === "Emerson" ? emerson :
            company === "Mitsubishi" ? mitsubishi : bosch
          }
          alt={`${company} Logo`}
          className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <GraduationCap className="h-12 w-12 text-accent" />
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.course}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose AutomationPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert-Led Training</h3>
                <p className="text-primary-foreground/80">Learn from founder Siva Lingamiayya and certified automation engineers</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Real-World Projects</h3>
                <p className="text-primary-foreground/80">Hands-on experience with industry-standard equipment and software</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Patented Methodology</h3>
                <p className="text-primary-foreground/80">Unique problem-solving approach developed through years of research</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Career Success</h3>
                <p className="text-primary-foreground/80">Dedicated placement support to secure positions at top companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Have More Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
