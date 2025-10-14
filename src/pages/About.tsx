import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founder from "../assets/founder.png";
const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              About Varahi Automations
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Building the next generation of automation professionals through
              excellence in education and real-world experience
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Varahi automation Training Institute is a premier institution
              dedicated to advancing careers in industrial automation.
              Established with a commitment to technical excellence, we bridge
              the gap between academic knowledge and industry requirements
              through comprehensive, hands-on training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the world's leading automation training institute,
                  recognized for producing highly skilled professionals who
                  drive innovation and excellence in industrial automation
                  globally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide world-class automation training that combines
                  theoretical knowledge with practical expertise, empowering
                  students to excel in their careers and contribute meaningfully
                  to the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Serve Automation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              Why We Focus on Automation
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Industrial automation represents the future of manufacturing and
              production. As industries worldwide embrace Industry 4.0, the
              demand for skilled automation professionals continues to soar. We
              focus exclusively on automation because:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  It's a rapidly growing field with limitless career
                  opportunities across all industries
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  Automation skills are highly valued and command premium
                  salaries in the job market
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  The technology is constantly evolving, offering continuous
                  learning and growth
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  Our passion lies in empowering individuals to master these
                  transformative technologies
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Meet Our Founder
            </h2>
            <Card className="border-none shadow-xl">
              <CardContent className="pt-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 bg-gradient-hero rounded flex items-center justify-center mb-4">
                      <img
                        src={founder} // imported image
                        alt="Siva Lingamiayya"
                        className="h-full w-full object-cover"
                      />

                     
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Siva Lingamiayya
                    </h3>
                    <p className="text-primary font-semibold">
                      Founder & Chief Trainer
                    </p>
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 flex items-center space-x-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span>Experienced Tech Professional</span>
                      </h4>
                      <p className="text-muted-foreground">
                        With over 15 years of hands-on experience in industrial
                        automation, Siva has worked on complex projects across
                        multiple industries, bringing real-world expertise to
                        the classroom.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2 flex items-center space-x-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span>Certified Automation Engineer</span>
                      </h4>
                      <p className="text-muted-foreground">
                        Holds multiple prestigious certifications from leading
                        automation companies including Siemens, Rockwell, and
                        Schneider Electric.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2 flex items-center space-x-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span>Research & Innovation</span>
                      </h4>
                      <p className="text-muted-foreground">
                        Led groundbreaking research projects in automation
                        optimization and has contributed patented
                        problem-solving methodologies that have improved
                        efficiency for multiple Fortune 500 companies.
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-foreground italic">
                        "My mission is simple: to empower students with the
                        knowledge, skills, and confidence they need to secure
                        rewarding careers and make meaningful contributions to
                        the automation industry."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our Certified Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Anitha Krishnan",
                role: "PLC & SCADA Specialist",
                cert: "Siemens Certified",
              },
              {
                name: "Ramesh Babu",
                role: "Industrial IoT Expert",
                cert: "Rockwell Certified",
              },
              {
                name: "Kavitha Menon",
                role: "Robotics & Motion Control",
                cert: "ABB Certified",
              },
            ].map((trainer, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                  <p className="text-muted-foreground mb-1">{trainer.role}</p>
                  <p className="text-sm text-primary font-semibold">
                    {trainer.cert}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
