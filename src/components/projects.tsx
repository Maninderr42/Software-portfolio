import React from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import pro1 from '.././Assests/Screenshot 2025-07-09 000252.png'
import pro2 from '.././Assests/Screenshot 2025-07-31 110625.png'


import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Projects = () => {

  const projects = [
    {
      title: "Nexgen Innovation - Software Company",
      description:
        "A modern software solutions company website showcasing services, client success stories, and innovative digital products.",
      image: pro1,
      tags: ["Html", "Css", "JavaScript", "React"],
      link: "https://venerable-marigold-f5ad61.netlify.app/",
    },
    {
      title: "Expiration Reminder & Inventory Manager",
      description:
        "A smart application that tracks product expiration dates, manages inventory levels, and sends timely reminders to reduce waste.",
      image: pro2,
      tags: ["React", "Spring boot", "Material Ui", "MySql"],
      link: "https://expirationreminder.netlify.app/",
    },
    {
      title: "Fashion Website",
      description:
        "An e-commerce fashion platform with product browsing, stylish UI, secure checkout, and personalized shopping experiences.",
      image: "src/Assests/Screenshot 2025-07-21 233824.png",
      tags: ["React", "Java", "MySQL", "Docker"],
      link: "https://shopify-websites.netlify.app/",
    },
    {
      title: "Fdekivery Software",
      description:
        "A delivery management system designed for businesses to track orders, manage couriers, and optimize delivery routes efficiently.",
      image: "./src/Assests/Screenshot 2025-08-28 170654.png",
      tags: ["java", "React", "Springboot" ,"SQL", "Firebase"],
      link: "https://github.com/Maninderr42",
    },
    {
      title: "TravelBuddy App",
      description:
        "A mobile app for travelers to create itineraries, discover local attractions, and share trips with friends in real time.",
      image: "src/Assests/Screenshot 2025-08-28 170548.png",
      tags: ["React", "Springboot", "MongoDB", "AWS" ,"Docker"],
      link: "https://github.com/Maninderr42",
    },
    {
      title: "Employee Management System",
      description:
       "A web-based solution for managing employee records, attendance, payroll, and performance tracking to streamline HR operations.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
      tags: ["React", "Springboot", "MySQL", "Docker"],
      link: "https://github.com/Alok290",
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
    <section id="projects" className="section-padding bg-default-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Our Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-foreground-600 text-lg">
            Explore our portfolio of successful projects across various industries. 
            Each project showcases our expertise, creativity, and commitment to delivering exceptional results.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-default-200 overflow-visible">
                <CardBody className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="font-bold">{project.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-foreground-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Chip key={tagIndex} size="sm" variant="flat" color="primary">
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="pt-0 px-6 pb-6">
                  <Button
                    href={project.link}
                    as="a"
                    color="primary"
                    variant="flat"
                    radius="full"
                    className="w-full"
                    endContent={<Icon icon="lucide:external-link" />}
                  >
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
         <Button
  color="primary"
  size="lg"
  radius="full"
  className="px-8 font-medium"
  onClick={() => window.open("https://github.com/Alok290", "_blank")}
>
  View All Projects
</Button>
        </motion.div>
      </div>
    </section>
  );
};