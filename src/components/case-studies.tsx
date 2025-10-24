import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Healthcare Provider Platform Transformation",
      client: "MediCorp International",
      description: "How we helped a leading healthcare provider digitize their operations, resulting in 40% improved efficiency and enhanced patient care.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
      results: ["40% operational efficiency increase", "65% reduction in wait times", "98% patient satisfaction"],
      link: "#",
    },
    {
      title: "E-commerce Platform Scalability Solution",
      client: "ShopWave Retail",
      description: "Scaling an e-commerce platform to handle 10x growth in traffic and transactions during peak shopping seasons.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
      results: ["10x traffic capacity", "99.99% uptime during Black Friday", "3x faster page load times"],
      link: "#",
    },
    {
      title: "Financial Services Digital Transformation",
      client: "Global Finance Partners",
      description: "Modernizing legacy systems for a financial services firm, enabling new digital products and improving security compliance.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
      results: ["85% reduction in processing time", "100% regulatory compliance", "$2.5M annual cost savings"],
      link: "#",
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-foreground-600 text-lg">
            Discover how we've helped businesses across various industries overcome challenges, 
            innovate, and achieve remarkable results through our software solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <Card className="border border-default-200">
                  <CardBody className="p-0">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </CardBody>
                </Card>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block bg-primary-100 text-primary px-4 py-1 rounded-full text-sm font-medium">
                  {study.client}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{study.title}</h3>
                <p className="text-foreground-600 text-lg">{study.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start gap-2">
                        <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  href={study.link}
                  as="a"
                  color="primary"
                  variant="flat"
                  radius="full"
                  endContent={<Icon icon="lucide:arrow-right" />}
                >
                  Read Full Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button
            color="primary"
            size="lg"
            radius="full"
            className="px-8 font-medium"
          >
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
};