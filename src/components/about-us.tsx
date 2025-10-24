import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const AboutUs = () => {
  const stats = [
    { value: "2++", label: "Years Experience", icon: "lucide:calendar" },
    { value: "5+", label: "Projects Completed", icon: "lucide:check-circle" },
    { value: "10+", label: "Team Members", icon: "lucide:users" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <p className="text-primary font-medium mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We're a team of passionate digital craftsmen
            </h2>
            <p className="text-foreground-600 text-lg">
              Founded in 2014, DevSphere has grown from a small startup to a leading software development company. 
              We specialize in creating innovative digital solutions that help businesses transform their operations and achieve their goals.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://img.heroui.chat/image/ai?w=600&h=400&u=1"
                alt="Our team"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-foreground-600">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We believe in creating software that not only solves problems but also delights users.
            </p>

            <Divider className="my-2" />

            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-foreground-600">
              To be the most trusted technology partner for businesses worldwide, known for our technical excellence, innovative solutions, and exceptional client service.
            </p>

            <Divider className="my-2" />

            <h3 className="text-2xl font-bold">Our Values</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check" className="text-primary mt-1" />
                <span>Excellence in everything we do</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check" className="text-primary mt-1" />
                <span>Innovation and creativity</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check" className="text-primary mt-1" />
                <span>Integrity and transparency</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check" className="text-primary mt-1" />
                <span>Client-focused approach</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check" className="text-primary mt-1" />
                <span>Continuous learning</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check" className="text-primary mt-1" />
                <span>Collaborative teamwork</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-default-200">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <Icon icon={stat.icon} className="text-primary text-xl" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-foreground-600">{stat.label}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};