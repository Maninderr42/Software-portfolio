import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { HashLink } from "react-router-hash-link";

export const Services = () => {
  const services = [
    {
      icon: "lucide:code",
      title: "Custom Software Development",
      description: "We design and develop custom software solutions tailored to your unique business needs, from enterprise applications to specialized tools.",
      color: "bg-primary-100 text-primary",
    },
    {
      icon: "lucide:smartphone",
      title: "Mobile App Development",
      description: "Create engaging, high-performance mobile applications for iOS and Android platforms that provide exceptional user experiences.",
      color: "bg-success-100 text-success",
    },
    {
      icon: "lucide:globe",
      title: "Web Application Development",
      description: "Build responsive, scalable web applications using modern frameworks and technologies that deliver powerful functionality.",
      color: "bg-secondary-100 text-secondary",
    },
    {
      icon: "lucide:cloud",
      title: "Cloud Solutions",
      description: "Leverage cloud technologies to build scalable, secure, and cost-effective solutions that grow with your business needs.",
      color: "bg-warning-100 text-warning",
    },
    {
      icon: "lucide:database",
      title: "Data Analytics & AI",
      description: "Transform your data into actionable insights with our advanced analytics, machine learning, and artificial intelligence solutions.",
      color: "bg-danger-100 text-danger",
    },
    {
      icon: "lucide:shield",
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security assessments, implementation, and ongoing monitoring services.",
      color: "bg-primary-100 text-primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="section-padding bg-default-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Software Solutions
          </h2>
          <p className="text-foreground-600 text-lg">
            We offer a wide range of software development services to help businesses 
            transform their operations, enhance customer experiences, and drive growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-default-200 overflow-visible">
                <CardBody className="flex flex-col gap-4 p-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.color}`}>
                    <Icon icon={service.icon} className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-foreground-600 flex-grow">{service.description}</p>
                </CardBody>
                <CardFooter className="pt-0 px-6 pb-6">
                  <Button
                    as={HashLink}
                    to="#contact"
                    variant="flat"
                    color="primary"
                    radius="full"
                    className="w-full"
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};