import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/whatsappbutton";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ⚠️ IMPORTANT: REPLACE THIS PLACEHOLDER WITH YOUR ACTUAL WEB3FORMS ACCESS KEY!
const ACCESS_KEY = "85d32ece-4945-4616-bbd1-a9ffb1e871c0"; 

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading button

  // Initial state setup
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    course: "",
    mode: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  // Unified change handler for Input and Textarea
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }, []);

  // Select component change handler
  const handleSelectChange = useCallback((field: keyof typeof initialFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Create a FormData API object (renamed to submissionData to avoid conflict)
    const submissionData = new FormData();

    // 2. Append the ACCESS_KEY first
    submissionData.append("access_key", ACCESS_KEY);
    
    // 3. Append data from the React STATE OBJECT (formData from useState)
    //    We iterate through the state object keys and append the values.
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("course", formData.course);
    submissionData.append("mode", formData.mode);
    submissionData.append("message", formData.message);
    
    // Optional custom subject line
    submissionData.append("subject", `New Course Inquiry: ${formData.course || 'General'}`);


    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            // CRITICAL: Pass the new FormData object here
            body: submissionData, 
        });

        const json = await res.json();

        if (json.success) {
            toast({
                title: "Message Sent Successfully!",
                description: "Your inquiry has been received. We will contact you soon.",
            });
            setFormData(initialFormData); // Reset form

        } else {
            toast({
                title: "Submission Failed",
                description: json.message || "An error occurred. Check your ACCESS_KEY.",
            });
        }
    } catch (error) {
        console.error("Submission Error:", error);
        toast({
            title: "Network Error",
            description: "Could not connect to the form service. Please try again later.",
        });
    } finally {
        setIsSubmitting(false);
    }
};

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to start your automation career? Get in touch with us today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <Card className="border-none shadow-xl">
                <CardContent className="pt-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Course of Interest *
                      </label>
                      <Select
                        value={formData.course}
                        onValueChange={(value) =>
                          handleSelectChange("course", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          <SelectItem value="plc">PLC Programming</SelectItem>
                          <SelectItem value="scada">SCADA Systems</SelectItem>
                          <SelectItem value="hmi">HMI Development</SelectItem>
                          <SelectItem value="iot">
                            Industrial IoT & Robotics
                          </SelectItem>
                          <SelectItem value="motion">
                            Motion Control Systems
                          </SelectItem>
                          <SelectItem value="dcs">DCS Systems</SelectItem>
                          <SelectItem value="siemens">
                            Siemens Certification
                          </SelectItem>
                          <SelectItem value="rockwell">
                            Rockwell Certification
                          </SelectItem>
                          <SelectItem value="multi">
                            Multi-Vendor Track
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label
                        htmlFor="mode"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Preferred Training Mode *
                      </label>
                      <Select
                        value={formData.mode}
                        onValueChange={(value) =>
                          handleSelectChange("mode", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="offline">Offline</SelectItem>
                          <SelectItem value="hybrid">
                            Hybrid (Online + Offline)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals and questions..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-accent text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary shadow-md">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-muted-foreground">
                          3/962 2b2, 1st floor <br />
                          Tadipatri Block Road/Street/Lane G.v.p State City
                          Tadipatri colony
                          <br />
                          ANDHRA PRADESH District ANANTHAPUR , Pin 515411
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary shadow-md">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-muted-foreground">
                          +91 9392476382
                          <br />
                          +91 9392476382
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary shadow-md">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <p className="text-muted-foreground">
                          sivalingmaiah786@gmail.com
                          <br />
                          sivalingmaiah786@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary shadow-md">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          Working Hours
                        </h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Inquiry CTA */}
              <Card className="mt-8 bg-gradient-hero text-primary-foreground border-none">
                <CardContent className="pt-8 pb-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Quick Assistance?
                  </h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Request a callback and our team will reach out to you
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-accent hover:bg-accent/90"
                  >
                    Request Callback
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Find Us on Map
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0000000000003!2d78.0160000000000!3d14.9170000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3843abcdef1234%3A0x1234567890abcdef!2sTadipatri%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AutomationPro Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default Contact;