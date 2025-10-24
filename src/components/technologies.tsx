import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Technologies = () => {
  const techCategories = [
    {
      key: "frontend",
      title: "Frontend",
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "Angular", icon: "logos:angular-icon" },
        { name: "Vue.js", icon: "logos:vue" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        // Replaced TypeScript -> JavaScript
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "Material UI", icon: "logos:material-ui" },
        { name: "Redux", icon: "logos:redux" },
      ],
    },
    {
      key: "backend",
      title: "Backend",
      technologies: [
       { name: "Spring Boot", icon: "logos:spring-icon" },
        { name: "Node.js", icon: "logos:nodejs-icon" },
            { name: "Java", icon: "logos:java" },
        { name: "Python", icon: "logos:python" },
        // Removed: .NET, PHP, Ruby, Go, GraphQL
        // Added:
        { name: "Kafka", icon: "logos:kafka" },
      ],
    },
    {
      key: "database",
      title: "Database",
      technologies: [
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "Redis", icon: "logos:redis" },
        { name: "Firebase", icon: "logos:firebase" },
        { name: "Elasticsearch", icon: "logos:elasticsearch" },
        { name: "DynamoDB", icon: "logos:aws-dynamodb" },
        { name: "Cassandra", icon: "logos:cassandra" },
      ],
    },
    {
      key: "cloud",
      title: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "logos:aws" },
        { name: "Azure", icon: "logos:microsoft-azure" },
        { name: "Google Cloud", icon: "logos:google-cloud" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "Kubernetes", icon: "logos:kubernetes" },
        { name: "Jenkins", icon: "logos:jenkins" },
        { name: "Terraform", icon: "logos:terraform-icon" },
        { name: "GitHub Actions", icon: "logos:github-actions" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="technologies" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Our Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cutting-Edge Technologies
          </h2>
          <p className="text-foreground-600 text-lg">
            We leverage the latest technologies and frameworks to build robust, scalable, 
            and high-performance software solutions for our clients.
          </p>
        </motion.div>

        <Card className="border border-default-200">
          <CardBody className="p-0 sm:p-6">
            <Tabs 
              aria-label="Technology categories" 
              color="primary" 
              variant="underlined"
              classNames={{
                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:text-primary"
              }}
            >
              {techCategories.map((category) => (
                <Tab key={category.key} title={category.title}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8"
                  >
                    {category.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-default-100 transition-colors"
                      >
                        <div className="w-16 h-16 flex items-center justify-center">
                          <Icon icon={tech.icon} className="text-4xl" />
                        </div>
                        <p className="font-medium text-center">{tech.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </Tab>
              ))}
            </Tabs>
          </CardBody>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground-600">
            Our technology stack is constantly evolving as we embrace new tools and frameworks 
            that help us deliver better solutions for our clients. We select the right technologies 
            for each project based on specific requirements and goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};