import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, HealthTech Innovations",
      company: "HealthTech Innovations",
            avatar: "src/Assests/no-dp_16.webp",
      quote: "DevSphere transformed our healthcare platform, delivering a solution that exceeded our expectations. Their technical expertise and commitment to quality are unmatched in the industry.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "VP of Engineering, TechGrowth",
      company: "TechGrowth",
            avatar: "src/Assests/no-dp_16.webp",

      quote: "Working with DevSphere was a game-changer for our business. They understood our complex requirements and delivered a scalable solution that has helped us grow our user base by 200%.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Product Director, RetailPro",
      company: "RetailPro",
            avatar: "src/Assests/no-dp_16.webp",
      quote: "The team at DevSphere are true professionals. They not only delivered our e-commerce platform on time and within budget but also provided valuable insights that improved our overall product strategy.",
      rating: 5,
    },
    {
      name: "David Wilson",
      position: "CEO, FinServe Global",
      company: "FinServe Global",
            avatar: "src/Assests/no-dp_16.webp",
      quote: "DevSphere's expertise in financial software development is exceptional. They helped us modernize our legacy systems while ensuring compliance with strict regulatory requirements.",
      rating: 5,
    },
    {
      name: "Jessica Taylor",
      position: "COO, EduTech Solutions",
      company: "EduTech Solutions",
            avatar: "src/Assests/no-dp_16.webp",
      quote: "The learning management system developed by DevSphere has revolutionized how we deliver educational content. Their attention to detail and user experience design is outstanding.",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext();
    }
    if (touchStart - touchEnd < -100) {
      handlePrev();
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-default-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-foreground-600 text-lg">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border border-default-200">
                    <CardBody className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                          <Icon icon="lucide:quote" className="text-primary text-4xl opacity-50" />
                        </div>
                        
                        <p className="text-lg text-foreground-600 mb-8 italic">
                          "{testimonial.quote}"
                        </p>
                        
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i}
                              icon={i < testimonial.rating ? "lucide:star" : "lucide:star"} 
                              className={i < testimonial.rating ? "text-warning" : "text-default-300"}
                            />
                          ))}
                        </div>
                        
                        <div className="flex items-center flex-col">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mb-4"
                          />
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-foreground-500">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background rounded-full p-3 shadow-md hover:bg-default-100 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <Icon icon="lucide:chevron-left" className="text-xl" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background rounded-full p-3 shadow-md hover:bg-default-100 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <Icon icon="lucide:chevron-right" className="text-xl" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-default-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};