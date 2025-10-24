import React from "react";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "Email Us",
      value: "maninderr42@gmail.com",
      link: "mailto:contact@devsphere.com",
    },
    {
      icon: "lucide:phone",
      title: "Call Us",
      value: "+91 8591066565 ",
      link: "tel:+15551234567",
    },
    {
      icon: "lucide:map-pin",
      title: "Visit Us",
      value: "Ludhiana, Punjab, 141014",
      link: "https://maps.google.com",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section-padding bg-default-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-foreground-600 text-lg">
            Have a project in mind or want to learn more about our services? 
            We'd love to hear from you. Reach out to us using the form below or through our contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border border-default-200">
              <CardBody className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mb-6">
                      <Icon icon="lucide:check" className="text-success text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-foreground-600 max-w-md">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name}
                        isRequired
                      />
                      
                      <Input
                        label="Email Address"
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email}
                        isRequired
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Company"
                        placeholder="Enter your company name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      
                      <Input
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Textarea
                      label="Message"
                      placeholder="Tell us about your project or inquiry"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      errorMessage={errors.message}
                      minRows={5}
                      isRequired
                    />
                    
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      radius="full"
                      className="w-full md:w-auto px-8 font-medium"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border border-default-200 h-full">
              <CardBody className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon icon={item.icon} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <a 
                          href={item.link} 
                          className="text-foreground-600 hover:text-primary transition-colors"
                          target={item.icon === "lucide:map-pin" ? "_blank" : undefined}
                          rel={item.icon === "lucide:map-pin" ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
               <div className="mt-12">
  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
  <div className="flex gap-4">
    <a
      href="https://www.linkedin.com/in/maninderdeep-singh"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-default-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors"
    >
      <Icon icon="lucide:linkedin" />
    </a>

    <a
      href="https://github.com/Alok290"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-default-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors"
    >
      <Icon icon="lucide:github" />
    </a>
  </div>
</div>

              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};